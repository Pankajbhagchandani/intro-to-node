var net = require('net');

var c = net.createConnection(80, 'www.kogan.com');
c.write('GET /au/ HTTP/1.1\r\nHost: www.kogan.com\r\n\r\n');

//var c = net.createConnection(80, 'www.google.com.au');
//c.write('GET /?gfe_rd=cr&gws_rd=cr HTTP/1.0\r\n\r\n');
c.pipe(process.stdin);
