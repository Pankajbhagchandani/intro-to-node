var net = require('net');

net.createServer(function(conn) {
  conn.on('data', function(d) {
    conn.write('hello ' + d.toString().split('').reverse().join(''));
  });
  conn.on('end', function() {
    console.log(':(');
  });
}).listen(8080);
