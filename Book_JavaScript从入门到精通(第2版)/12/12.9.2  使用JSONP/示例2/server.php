<?php
header("Content-Type: text/html;charset=utf-8");
$callback = $_GET["jsonp"];
$id = $_GET["id"];
echo $callback . "(";
?>
{
    "title" : "JSONP Test",
    "link" : "http://www.mysite.cn/",
    "modified" : "2018-12-1",
    "items" : 
<?php
if ($id == "1") {
?> 
    {
        "title" : "百度",
        "link" : "http://www.baidu.com/"
    }

<?php
} else if ($id == "2") {
?> 
    {
        "title" : "谷歌",
        "link" : "http://www.google.cn/"
    }
<?php
} else {
	echo "";
}
echo "})";
?> 
