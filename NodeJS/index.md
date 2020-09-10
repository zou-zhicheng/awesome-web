# [Web](../index.md) - [NodeJS](index.md)

事件驱动

非阻塞I/O库

​	异步调用在操作系统和计算机组成上的原理是什么？

# 安装

安装开发环境

## Windows

下载 node-v10.15.3-x64.msi 安装

检测PATH环境变量是否配置了Node.js，点击开始=》运行=》输入"cmd" => 输入命令"path"，

查看环境变量中是否包含了C:\Program Files\nodejs\

检查版本

```
node --version
npm --version
```

## Mac

## Ubuntu

```
sudo apt install libssl1.0-dev
sudo apt install nodejs nodejs-dev npm
```

检查版本

```
node --version
npm --version
```

## 镜像

### 临时配置

### 持久配置

```
npm config set registry https://registry.npm.taobao.org
```

### 通过cnpm使用

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

使用

```
cnpm install express
```

### 验证

配置后可通过下面方式来验证是否成功

```
npm config get registry
```

或

```
npm info express
```



# 参考资料

