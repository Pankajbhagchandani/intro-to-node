var http = require('http');

http.createServer(function(request, response) {
   console.log(request.url);
   console.log(request.headers);
   response.end('hello');
}).listen(8080);
