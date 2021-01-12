<%
user= Request("user")
pass= Request("pass") 

Set S=server.CreateObject("Adodb.Stream")  
S.Mode=3  
S.Type=1  
S.Open 

if user = "admin"  and pass = "123456" then
	S.LoadFromFile(server.mappath("2.png"))
else
	S.LoadFromFile(server.mappath("1.png"))
end if

Response.ContentType   =  "image/png"
Response.BinaryWrite(S.Read)
Response.Flush
s.close
set   s=nothing 

%>

