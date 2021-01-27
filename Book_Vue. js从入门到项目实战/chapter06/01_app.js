const http = require("http")
const fs = require("fs")
const host = "127.0.0.1"
const port = 3000
const server = http.createServer(function(req, res){
	let content = fs.readFileSync('01_vue_route.html')
	res.writeHead(200, {'content-type': 'text/html; charset="utf-8"'})
	res.write(content)
	res.end()
})
server.listen(port, host, function(){
	console.log(`server is running at: http://${host}:${port}`)
})