var http = require("http");
fs = require('fs');
var data = fs.readFileSync('./public/index.html');

	http.createServer(function (request, response){
		response.writeHead(200, {'Content-type': 'text/html'});
		response.write(data);
		response.end();
	}).listen(8080);
