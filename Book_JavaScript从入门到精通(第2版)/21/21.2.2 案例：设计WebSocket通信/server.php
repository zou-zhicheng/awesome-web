<?php
//127.0.0.1是在本地主机测试，如果有多台电脑，可以写IP地址
$webSocket = new WebSocket('127.0.0.1', 8008, 100);
$webSocket->start();

//定义WebSocket类
class WebSocket {
    private $socket;//socket的连接池，即client连接进来的socket标志
    private $accept;//不同状态的 socket 管理
    private $isHand = array();// 判断是否握手
    public function __construct($host, $port, $max) {
		//创建服务端的socket套接流,net协议为IPv4，protocol协议为TCP
        $this->socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
        socket_set_option($this->socket, SOL_SOCKET, SO_REUSEADDR, TRUE);
		//绑定接收的套接流主机和端口,与客户端相对应
        socket_bind($this->socket, $host, $port);
		//监听套接流
        socket_listen($this->socket, $max);
    } 
	//对创建的socket循环进行监听，处理数据 
    public function start() {
		//死循环，直到socket断开,让服务器无限获取客户端传过来的信息
        while(true) {
            $cycle = $this->accept;
            $cycle[] = $this->socket;
			/*

            //这个函数是同时接受多个连接的关键，我的理解它是为了阻塞程序继续往下执行。
            socket_select ($sockets, $write = NULL, $except = NULL, NULL);

             $sockets可以理解为一个数组，这个数组中存放的是文件描述符。当它有变化（就是有新消息到或者有客户端连接/断开）时，socket_select函数才会返回，继续往下执行。 

            $write是监听是否有客户端写数据，传入NULL是不关心是否有写变化。 

            $except是$sockets里面要被排除的元素，传入NULL是”监听”全部。 

            最后一个参数是超时时间 

            如果为0：则立即结束 

            如果为n>1: 则最多在n秒后结束，如遇某一个连接有新动态，则提前返回 

            如果为null：如遇某一个连接有新动态，则返回

            */
            socket_select($cycle, $write, $except, null);
            foreach($cycle as $sock) {
				//如果有新的client连接进来，则
                if($sock === $this->socket) {
					 //接收客户端传过来的信息，socket_accept的作用就是接受socket_bind()所绑定的主机发过来的套接流
                    $client = socket_accept($this->socket);
					//将新连接进来的socket存进连接池
                    $this->accept[] = $client;
					//返回包含数组中所有键名的一个新数组
                    $key = array_keys($this->accept);
					//输出数组中最后一个元素的值
                    $key = end($key);
					//判断是否握手，标志该socket资源没有完成握手
                    $this->isHand[$key] = false;
                } else {
					//读取该socket的信息，注意：第二个参数是引用传参,即接收数据，第三个参数是接收数据的长度
                    $length = socket_recv($sock, $buffer, 204800, 0);					//根据socket在accept池里面查找相应的健ID
					/*resource socket 是生成的套接字
					string &buf 是接收缓冲区
					int len 是你打算接收的长度
					int flags 是一个标志
					0x1 数据应该带外发送，所谓带外数据就是TCP紧急数据
					0x2 使有用的数据复制到缓冲区内，但并不从系统缓冲区内删除。
					0x4 不要将包路由出去。
					以上三项与sock.h文件中定义完全相同
					0x8 数据完整记录
					0x100 数据完整处理*/

                    $key = array_search($sock, $this->accept);
					 //如果接收的信息长度小于7，则该client的socket为断开连接
                    if($length < 7) {
						 //给该client的socket进行断开操作
                        $this->close($sock);
                        continue;
                    }
					 //判断该socket是否已经握手
                    if(!$this->isHand[$key]) {
						//如果没有握手，则进行握手处理
                        $this->dohandshake($sock, $buffer, $key);
                    } else {//向该client发送信息，对接受到的信息进行uncode处理
                        // 先解码，再编码
                        $data = $this->decode($buffer);
                        $data = $this->encode($data);
                        // 判断断开连接（断开连接时数据长度小于10）
						//如果不为空，则进行消息推送操作
                        if(strlen($data) > 0) {
                            foreach($this->accept as $client) {
								//向socket_accept的套接流写入信息，也就是回馈信息给socket_bind()所绑定的主机客户端
								//socket_write的作用是向socket_create的套接流写入信息，或者向socket_accept的套接流写入信息
                                socket_write($client, $data, strlen($data));
                            }
                        }
                    }
                }
                
            }

        }
        
    }

    /**
     * 首次与客户端握手
     */
    public function dohandshake($sock, $data, $key) {
		//截取Sec-WebSocket-Key的值并加密，其中$key后面的一部分258EAFA5-E914-47DA-95CA-C5AB0DC85B11字符串应该是固定的
        if (preg_match("/Sec-WebSocket-Key: (.*)\r\n/", $data, $match)) {
            $response = base64_encode(sha1($match[1] . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11', true));
            $upgrade  = "HTTP/1.1 101 Switching Protocol\r\n" .
                    "Upgrade: websocket\r\n" .
                    "Connection: Upgrade\r\n" .
                    "Sec-WebSocket-Accept: " . $response . "\r\n\r\n";
            socket_write($sock, $upgrade, strlen($upgrade));
            $this->isHand[$key] = true;
        }
    }

    /**
     * 关闭一个客户端连接
     */
    public function close($sock) {
        $key = array_search($sock, $this->accept);
		//socket_close的作用是关闭socket_create()或者socket_accept()所建立的套接流
        socket_close($sock);
        unset($this->accept[$key]);
        unset($this->handshake[$key]);
    }

    /**
     * 解码过程
     */
    public function decode($buffer) {
        $len = $masks = $data = $decoded = null;
       // $len = ord($buffer[1]) & 127;
	   $len = ord($buffer) & 127;
        if ($len === 126) {
            $masks = substr($buffer, 4, 4);
            $data = substr($buffer, 8);
        } 
        else if ($len === 127) {
            $masks = substr($buffer, 10, 4);
            $data = substr($buffer, 14);
        } 
        else {
            $masks = substr($buffer, 2, 4);
            $data = substr($buffer, 6);
        }
        for ($index = 0; $index < strlen($data); $index++) {
            $decoded .= $data[$index] ^ $masks[$index % 4];
        }
        return $decoded;
    }

    /**
     * 编码过程
     */
    public function encode($buffer) {
        $length = strlen($buffer);
        if($length <= 125) {
            return "\x81".chr($length).$buffer;
        } else if($length <= 65535) {
            return "\x81".chr(126).pack("n", $length).$buffer;
        } else {
            return "\x81".char(127).pack("xxxxN", $length).$buffer;
        }
    }


}
?>