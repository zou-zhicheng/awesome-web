# 书籍介绍

**JavaScript从入门到精通（微课视频版）（第2版） web前端开发网页设计丛书**

https://item.jd.com/12558421.html

- 出版社： [中国水利水电出版社](https://book.jd.com/publish/中国水利水电出版社_1.html)
- ISBN：9787517076568
- 版次：2
- 商品编码：12558421
- 品牌：[中国水利水电出版社](https://www.jd.com/pinpai/1-1713-447808.html)
- 包装：平装
- 开本：16开
- 出版时间：2019-09-01
- 用纸：胶版纸
- 页数：576
- 字数：1044000

# 第2章: 基本语法

转义序列

变量作用域 
	test2

变量污染
	test2

数字
	test3
	test8
	test9

undefined
	test4

严格模式
	通过浏览器测试不出来

严格模式的执行限制
	在严格模式下，this的值为undefined，所以"!this"为true。
	禁止在函数内部遍历调用栈
	禁止删除变量
		test4
	禁止删除变量
		test11

# 第3章: 运算符和表达式

## 3.1 运算符

3.1.5/test.html

```
//【示例2】在下面代码中，变量a在参与运算的过程中，其值不断被改写，很显然这个过程干扰了程序的正常运行结果。
var a = 1;
a = (a++)+(++a)-(a++)-(++a);
console.log(a);	//返回-4
```

## 3.2 算术运算

### 3.2.1 加法运算

```
console.log(Infinity + Infinity); 	// Infinity与 Infinity相加，结果是Infinity
console.log(( - Infinity) + ( - Infinity)); 	//负Infinity相加，结果是负Infinity
console.log(( - Infinity) + Infinity); 	//正负Infinity相加，结果是NaN
console.log(3.0 + "" + 4.3)	//先连接，再连接，返回"34.3"，3.0转换为字符串为3
```

### 3.2.2 减法运算

 ```
console.log(Infinity - Infinity);	// Infinity与Infinity相减，结果是NaN
console.log(( - Infinity) - ( - Infinity)); 	//负Infinity相减，结果是NaN
console.log(( - Infinity) - Infinity); 	//正负Infinity相减，结果是-Infinity

 ```

### 3.2.3 乘法运算



```
console.log(Infinity * ( - n)); 	// Infinity与任意非0负数相乘，结果都是-Infinity 
console.log(Infinity * 0);	// Infinity与0相乘，结果是NaN
```

### 3.2.4 除法运算

```
console.log(Infinity / n);	//Infinity被任意数字除，结果是Infinity或-Infinity，符号由第二个操作数的符号决定
console.log(Infinity / Infinity);	//返回NaN
console.log(n / 0);	//0除一个非无穷大的数字，结果是Infinity或-Infinity，符号由第二个操作数的符号决定
console.log(n / -0); 	//返回-Infinity ,解释同上
```

### 3.2.5 求余运算

```
console.log(Infinity % n);	//返回NaN
console.log(Infinity % Infinity);	//返回NaN
console.log(n % Infinity);	//返回5
console.log(n % 0);	//返回NaN
console.log(Infinity % 0);	//返回NaN
```

### 3.2.6 求反运算

## 3.3 逻辑运算

### 3.3.1 逻辑与运算

```
//	对象被转换为布尔值时为true。例如，一个空对象与一个布尔值进行逻辑与运算。
console.log(typeof({} && true))	//返回第二个操作数的值true
console.log(typeof(true && {}))	//返回第二个操作数的值{}
```

### 3.3.2 逻辑或运算

### 3.3.3 逻辑非运算

```
//【示例2】如果对于操作数执行两个逻辑非运算操作，就相当于把操作数转换为布尔值。
console.log(!0);	//返回true
console.log(!!0);	//返回false 
```

## 3.4 关系运算

### 3.4.1 大小比较

```
console.log("a">3);	//返回false，字符a被强制转换为NaN
```

### 3.4.2 相等与全等

```
console.log("1" == 1)	//返回true。字符串被转换为数字
console.log(true == 1)	//返回true。true被转换为1
console.log(undefined == null)	//返回true
console.log(NaN == NaN)	//返回false
console.log(NaN != NaN)	//返回true

console.log("1" === 1)	//返回false
console.log(null === undefined)	//返回false

//【示例5】对于复合型对象，主要比较引用的地址，不比较对象的值。
var a = new String("abcd")	//定义字符串"abcd"对象
var b = new String("abcd")	//定义字符串"abcd"对象
console.log(a === b);	//返回false
console.log(a == b);	//返回false

//【示例6】对于简单的值，只要类型相同，值相等，它们就是全等，不考虑表达式运算的过程变化，也不用考虑变量的引用地址。
var a = "1" + 1; 
var b = "11" ; 
console.log(a === b);	//返回true

```

## 3.5 赋值运算

```
//【示例2】在下面复杂的表达式中，逻辑与左侧的操作数是一个赋值表达式，右侧的操作数也是一个赋值表达式。
// 但是左侧赋的是一个简单值，右侧是把一个函数赋值给变量b。
// 在逻辑与运算中，左侧的赋值并没有真正的复制给变量a，当逻辑与运算执行右侧的表达式时，该表达式是把一个函数赋值给变量b，然后利用小括号运算符调用这个函数，返回变量a的值，结果并没有返回变量a的值为6，而是undefined。
var a;	//定义变量a
console.log(a = 6 && (b = function(){	//逻辑与运算表达式
      return a;	//返回变量a的值
   })()
);	//结果返回undefined
```

## 3.6 对象操作运算

### 3.6.1 归属检测

- in
- instanceof

### 3.6.2 删除属性

```
c = 1;	//初始化变量c，没有使用var语句声明
console.log(delete c);	//返回true，说明删除成功
var b = 1;	//使用var语句声明并初始化变量
console.log(delete b);	//返回false，说明不允许删除
console.log(delete Object.constructor); 	//返回true，说明部分内部成员可以被删除

//【示例2】如果删除不存在的对象成员，或者非对象成员、数组元素、变量时，则返回true，所以使用delete运算符时，要注意区分成功删除与无效操作。
var a ={};	//定义对象a
console.log(delete a);	//返回false，说明不允许删除
console.log(delete a.z);	//返回true，说明不存在该属性
console.log(delete b);	//返回true，说明不存在该变量
```

## 3.7 位运算

注意二进制的取反运算

```javascript
console.log(~12);	//返回值-13
```

## 3.8 其他运算

条件运算

```javascript
var a;
typeof a != "undefined" ?  a = a  :  a = 0 ;	//检测变量a是否赋值，否则设置默认值
(typeof a != "undefined") && (a = a) || (a = 0);	//逻辑表达式
```

逗号运算符

```javascript
// 在下面代码中，变量a的值是逗号运算之后，通过第二个操作数c=2的执行结果赋值得到。第一个操作数的执行结果没有返回，但是这个表达式被执行了。
a = (b=1,c=2);	//连续执行和赋值 a=2 b=1 c=2
```

void运算符

```javascript
//【示例1】在下面代码中，使用void运算符让表达式返回undefined。
var a = b = c = 2;	//定义并初始化变量的值
d = void (a -= (b *= (c += 5)));	//执行void运算符，并把返回值赋予给变量d
console.log(a);	//返回-12
console.log(b);	//返回14
console.log(c);	//返回7
console.log(d);	//返回undefined

//【示例2】在下面两行代码中，由于第一行代码没有使用小括号运算符，则void运算符优先执行，返回值undefined再与1执行减法运算，所以返回值为NaN。在第二行代码中由于使用小括号运算符明确void的操作数，减法运算符先被执行，然后再执行void运算，最后返回值是undefined。
console.log(void 2 - 1);	//返回NaN
console.log(void (2 - 1));	//返回undefined

//【示例3】void运算符也能像函数一样使用，如void(0)也是合法的。在特殊环境下一些复杂的语句可能不方便使用void运算符，而必须使用void函数。
console.log( void(i=0));	//返回undefined
console.log( void(i=0, i++));	//返回undefined
```

## 3.9 表达式

表达式优化

```javascript
if(( 6 <= age && age < 18) || 65 <= age ){  }
```

# 第4章: 语句和控制结构

## 4.1 语句

```javascript
var a = b = 1;
a
++
b

console.log(a);			//1
console.log(b);			//2
```

with语句

```
with(o=document.getElementsByTagName("input")){
    o[0].value = 0;
    o[1].value = 1;
    o[2].value = 3;
}
```

## 4.2 分支语句

if

```javascript
if (){
}
else if (){
}
else {}
```

switch

```javascript
var id = 1;
switch ( id ) {
    case 1:	//空匹配, case子句省略语句之后, 当匹配时候, 不管下一个case条件是否满足, 都会继续执行下一个case自居的语句
    case 2:
        console.log( "VIP会员" );	//打印这个
        break;
    case 3:
        console.log( "管理员" );
        break;
    default:
        console.log( "游客" );
}

```

default

```javascript
var id = 1;
switch ( id ) {
    default:										//及时写在前面, 也是先匹配case语句
        console.log( "游客" );
        break;	
    case 1:
        console.log( "普通会员" );	//打印 普通会员
        break;
    case 2:
        console.log( "VIP会员" );
        break;
    case 3:
        console.log( "管理员" );
        break;
}
```

```javascript
// 打印结果, 游客 普通会员 VIP会员
// 先检测case表达式的值, 由于case表达式的值都不匹配, 则跳到default子句执行, 然后继续执行 case 1 和 case 2子句, 但是最后不会返回default语句再重复执行
var id = 3;
switch ( id ) {
    default:
        console.log( "游客" );	 		// 控制台打印1
    case 1:
        console.log( "普通会员" );	// 控制台打印2
    case 2:
        console.log( "VIP会员" );		// 控制台打印3
}
```

 ## 4.3 循环结构

```javascript
for(var i = 0 in document){
    document.write("document."+i+"="+document[i] +"<br />");
}
```

```javascript
Array.prototype.x = "x";	//自定义数组对象的继承属性
var a = [1,2,3];	//定义数组对象，并赋值
a.y = "y";	//定义数组对象的额外属性
for(var i = 0; i < a.length ; i ++ )	//遍历数组对象a
	document.write( i + "：" +  a[i] + "<br />");
// 结果
// 0：1
// 1：2
// 2：3
```



```javascript
Array.prototype.x = "x";	//自定义数组对象的继承属性
var a = [1,2,3];	//定义数组对象，并赋值
a.y = "y";	//定义数组对象的额外属性
for(var i in a){	//遍历数组对象a
	document.write( i+"：" +  a[i] + "<br />");
}
// 结果
// 0：1
// 1：2
// 2：3
// y：y
// x：x
```

## 4.4 流程控制

- break
- continue

 ## 4.5 异常处理

```javascript
try{
    1=1; 					// 制作语法错误
}
catch(error){ 						// 捕获错误
    console.log(error.name); 			// 错误类型
    console.log(error.message); 			// 错误信息
  	throw new Error("再次抛出异常");
}
finally{						// 清除处理
   console.log("1=1");					// 提示代码
}
```

这个示例代码在运行的时候有些错误

## 4.6 案例实战

杨辉三角

# 操作字符串

## 5.1 字符串操作基础

### 字符串定义

```javascript
var s1 = ""
var s2 = ''
console.log( typeof s2 ); 	// 返回string，说明是值类型字符串

//【示例5】下面代码使用new运算符调用String()构造函数，将创建一个字符串型对象。
var s5 = new String()
console.log( typeof s5 ); 	// 返回object，说明是引用型对象

//【示例7】String()也可以作为普通函数使用，把参数转换为字符串类型的值返回。
var s7 = String( 123456 ); 	// 包装字符串, 注意这里没有new
console.log( typeof s7 );	// 返回string，说明是简单的值

//【示例8】String()允许传入多个参数，但是仅处理第一个参数，并把它转换为字符串返回。
var s8 = String( 1, 2, 3, 4, 5, 6 ); 	// 带有多个参数
console.log( s8 ); 	// 返回字符串"1"
console.log( typeof s8 ); 	// 返回string，数值被转换为字符串

//【示例9】下面变量n在构造函数内经过多次计算之后，最后值递增为5。
var n = 1; 	// 初始化变量
var s9 = new String( ++ n, ++ n, ++ n, ++ n); // 字符串构造处理
console.log( s9 ); 	// 返回2
console.log( n ); 	// 返回5
console.log( typeof s9 ); 	// 返回object，说明是引用类型对象
console.log( typeof n ); 	// 返回number，说明是数值类型
```

### 字符串的值

```javascript
s.toString()
s.valueof()
```

### 字符串的长度

```javascript
s.length
```

### 字符串连接

```javascript
var s1 = "abc";
var s2 = "def";
var s3 = s1 + s2; 	//s3 = "abcdef"
var s4 = s1.concat( "d", "e", "f" );  // s4 = "abcdef"
var a = ["a", "b", "c", "d", "e", "f"]
var s5 = a.join("") // s5 = "abcdef"
```

### 字符串查找

```javascript
var s = "http://www.wowoo.com/index.html"
var c = s.charAt(0)
var i1 = s.indexOf("w");					
var i2 = s.indexOf("w", 10);				// 从第10开始找
var i3 = s.lastIndexOf( "o" );
var i4 = s.lastIndexOf( "o", 17);	// 从第17往回找
var n = s.search( "//" );					// n=5
var a1 = s.match( /w/g ); 	// 全局匹配所有字符w, 返回数组  ["w", "w", "w", "w", "w"]

//【示例8】下面代码使用match()方法匹配URL字符串中所有点号字符。
var a2 = s.match( /(\.).*(\.).*(\.)/ ); 	// 执行一次匹配检索
console.log( a2.length ); 	// 返回4，说明返回的是一个包含4个元素的数组
console.log( a2[0] ); 	// 返回字符串"".wowoo.com/index."
console.log( a2[1] ); 	// 返回第一个字符.（点号），由第一个子表达式匹配
console.log( a2[2] ); 	// 返回第二个字符.（点号），由第二个子表达式匹配
console.log( a2[3] ); 	// 返回第三个字符.（点号），由第三个子表达式匹配
```

### 字符串截取

- slice 抽取一个子串
- substr 抽取一个子串, ECMAScript不再建议使用这个方法
- substring 返回字符串的一个子串

```javascript
var s = "http://www.wowoo.com/index.html"
var a = s.substr(7, 13)	//从序列号7开始, 截取13个字符, "www.wowoo.com"
var b = s.substr(21)			//从序列号21开始, 到结束, "index.html"

// substring(开始下标, 结束下标)
// slice(开始下标, 结束下标)
var c = s.substring(7, 20); //截取字符串[7, 20), "www.wowoo.com"
var d = s.slice(7, 20); 		//从序列号7开始, 到序列号20, 不包括序列号20, "www.wowoo.com"

// 如果 开始下表 > 结束下标
// substring方法能够在执行之前交换参数
// slice方法返回空字符串
var e = s.substring(20, 7); //截取字符串[7, 20), "www.wowoo.com"
var f = s.slice(20, 7); 		//f = "", 这里substring和slice就有了区别

// 如果参数值为负值
// substring方法视作无效, 返回空字符串
// slice方法能够解释为从右侧开始定位
var g = s.substring(-4, -1); //g=""
var h = s.slice(-4, -1); 		//h="htm"
```

关于index的解释如下

| h    | t    | t    | p    | :    | /    | /    | ...... | n    | d    | x    | .    | h    | t    | m    | l    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | 1    | 2    | 3    | 4    | 5    | 6    | ...... | -8   | -7   | -6   | -5   | -4   | -3   | -2   | -1   |

### 字符串替换

```javascript
var s = "http://www.wowoo.com/index.html"
// 第一个参数 /html/ 是正则表达式对象
var a = s.replace( /html/, "jsp" ); 	// 把字符串html替换为jsp
var b = s.replace("html", "jsp" ); 	// 把字符串html替换为jsp

//【示例2】下面代码在使用replace()方法时，灵活使用替换函数修改匹配字符串。
var s = "http://www.mysite.cn/index.html";
function f( x ){ 	// 替换文本函数
		console.log("x = ", x)	//x =  http://www.mysite.cn/index.html
    return x.substring( x.lastIndexOf(".")+1, x.length - 1 ) // 获取扩展名部分字符串
}
var c = s.replace( /(html)/, f(s)); 	// 调用函数指定替换文本操作

//【示例3】在replace()方法中约定了一个特殊的字符（$），这个美元符号如果附加一个序号就表示对正则表达式中匹配的子表达式存储的字符串引用。
var s = "JavaScript";
var d = s.replace( /(Java)(Script)/, "$2-$1");	// 交换位置

// $& 表示 与正则表达式想匹配的子字符串
//【示例4】重复字符串。
var s = "JavaScript";
var e = s.replace( /.*/, "$&$&");	// 返回字符串" JavaScriptJavaScript "

// $` 美元符号+切换技能键 位于匹配字符串左侧的文本
// var f = s.replace( /Script/, "$&") 返回的是 "JavaScript"
//【示例5】对匹配文本左侧的文本完全引用。
var s = "JavaScript";
var f = s.replace( /Script/, "$& != $`");	// 返回字符串"JavaScript != Java"

//【示例6】对匹配文本右侧的文本完全引用。
var s = "JavaScript";
var g = s.replace( /Java/, "$&$' is ");	// 返回字符串"JavaScript is Script"
```

### 字符串大小转换

```javascript
var s = "JavaScript";
var a = s.toUpperCase();	// 返回字符串"JAVASCRIPT"
var b = s.toLowerCase();
```

### 字符串比较

### 字符串与数组转换

```javascript
//【示例1】如果参数为空字符串，则split()方法能够按单个字符进行分切，然后返回与字符串等长的数组。
var s = "JavaScript";
var a = s.split("");	// 按字符空隙分割, 长度10, ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
var b = s.split();	// 空分割, 没有对字符串进行分割, 长度1, ["JavaScript"]
var c = s.split("",4); 	// 按顺序从左到有，仅分切4个元素的数组, 返回数组[J,a,v ,a]

var s = "a2b3c4d5e678f12g";
var d = s.split(/\d+/);	// 把匹配的数字为分隔符来切分字符串, 返回数组[a,b,c ,d,e, f,g]

var s = "122a2b3c4d5e678f12g";	// 字符串左侧有匹配的数字
var e = s.split(/\d+/);	// 把匹配的数字作为分隔符来切分字符串, 返回数组[,a,b,c ,d,e, f,g]

//【示例6】如果想使返回的数组包括分隔符或分隔符的一个或多个部分，可以使用带子表达式的正则表达式来实现。
// 这个例子比较难理解
var s = "aa2bb3cc4dd5e678f12g";
var a = s.split(/(\d)/); 	// 使用小括号包含数字分隔符, 返回数组[aa,2,bb,3,cc,4,dd,5,e,6,,7,,8,f,1,,2,g]
```

### 字符串格式化

大部分没有ECMAScript支持, 请谨慎使用

```javascript
//【示例】下面示例演示了如何使用上面字符串方法为字符串定义格式化显示属性。
var s = "abcdef";
document.write(s.bold());	// 定义加粗显示字符串"abcdef"
document.write(s.link("http://www.mysite.cn/"));//为字符串"abcdef"定义超链接
document.write(s.italics());	// 定义斜体显示字符串"abcdef"
document.write(s.fontcolor("red"));	// 定义字符串"abcdef"红色显示
```

### 清楚两侧空字符

```javascript
var s = "    abc def     \r\n  ";
s = s.trim();
```

### unicode编码和解码

- escape()和unescape()方法, 使用转义序列替换某些字符来对字符串进行编码, 不推荐使用
- encodeURI()和decodeURI()方法, 通过转义某些字符对URI进行编码
- encodeURI()和decodeURI()方法, 通过转义某些字符对URI的组件进行编码

```javascript
//【示例2】下面代码使用unescape()方法解码被escape()方法编码的字符串。
var s = "JavaScript中国";
s = escape(s); 	// Unicode编码
console.log(s); 	// 返回字符串"JavaScript%u4E2D%u56FD"
s = unescape(s); 	// Unicode解码
console.log(s); 	// 返回字符串"JavaScript中国"

//【示例6】下面代码比较URL字符串被encodeURIComponent()方法编码前后的比较。
var s = "http://www.mysite.cn/navi/search.asp?keyword=URI";
var a = encodeURI(s);	// "http://www.mysite.cn/navi/search.asp?keyword=URI"
var b = encodeURIComponent(s); //"http%3A%2F%2Fwww.mysite.cn%2Fnavi%2Fsearch.asp%3Fkeyword%3DURI"
// 转义用于分割uri的各个部分的标点符号
```

### base64编码和解码

base64是一种编码方法, 可以将任意字符(包括二进制字符流)转成可打印字符

base64方法不能够操作非ASCII字符

- btoa
- atob

```javascript
function b64Encode(str) {
    return btoa(encodeURIComponent(str));
}
function b64Decode(str) {
    return decodeURIComponent(atob(str));
}
var b = b64Encode('JavaScript从入门到精通');
var a = b64Decode(b);
```

## 5.2 案例实战



