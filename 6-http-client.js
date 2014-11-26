var http = require('http');

http.get("http://www.google.com.au/index.html?gfe_rd=cr&ei=O0h1VLf3BqmN8QeF5YDADw", function(res) {
  console.log("Got response: " + res.statusCode);
  console.log(res.headers);
  res.pipe(process.stdout);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});


return;

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST'
};
var req = http.request(options, function(res) {
  // same as with http.get
});

req.write('data\n');
req.end(); // with http.request you gave to .end() it even if no body sent. http.get() call it automatically
