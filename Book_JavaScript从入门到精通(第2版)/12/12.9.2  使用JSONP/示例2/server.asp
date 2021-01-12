<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%
callback = Request.QueryString("jsonp")
id = Request.QueryString("id")
Response.AddHeader "Content-Type","text/html;charset=utf-8"
Response.Write(callback & "(")
%>
{
    "title" : "JSONP Test",
    "link" : "http://www.mysite.cn/",
    "modified" : "2018-12-1",
    "items" : 
<%
if id = "1" then
%> 
    {
        "title" : "百度",
        "link" : "http://www.baidu.com/"
    }
<%
elseif id = "2" then
%>     
    {
        "title" : "谷歌",
        "link" : "http://www.google.cn/"
    }
<%
else
Response.Write(" ")
end if
Response.Write("})")
%>          






