<?php
header("Content-Type:text/html;Charset=UTF-8");// 设置页面的编码风格
header("Content-Type:image/jpeg");// 通知浏览器输出的是jpeg格式的图像
$user = $_GET["user"];
$pass = $_GET["pass"];
if( $user == "admin" &&  $pass == "123456" )
	$img = imagecreatetruecolor(3,3);//创建画布并设置大小  x轴3  y轴3

else
	$img = imagecreatetruecolor(1,1);//创建画布并设置大小  x轴1  y轴1
imagejpeg($img);             // 输出图像 
imagedestroy($img);          // 销毁图像
?>