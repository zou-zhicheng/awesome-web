<?php
header('Content-Type: text/xml;');
$dom = new DomDocument('1.0','utf-8');	//创建空的XML文档
$the = $dom->createElement('the');	//创建根节点
$dom->appendChild($the);	//附加到文档树上
$value = $dom->createTextNode('XML数据'); 	//创建文本节点
$the->appendChild($value);	//添加到根节点上
echo $dom->saveXML();	//保存文档，并输出显示
?>
