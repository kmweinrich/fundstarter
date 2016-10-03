var http = require("http");
var fs = require('fs');
var path = require('path');

fs.open('./public/index.html','r',function(err,file){
	fs.fstat(file,function(err,stats){
		var bufferSize=stats.size,
		chunkSize=512,
		buffer=new Buffer(bufferSize),
		bytesRead=0;

		while(bytesRead<bufferSize){
			if((bytesRead+chunkSize)>bufferSize){
				chunkSize=(bufferSize-bytesRead);
			}
			fs.read(file,buffer,bytesRead,chunkSize,bytesRead);
			bytesRead += chunkSize;
		}

//		fs.close(file);
	
	});	
});

		http.createServer(function(request,response){
			response.writeHead(200,{'Content-type':'text/html'});
			response.write(file);
			response.end();
		}).listen(8080);
