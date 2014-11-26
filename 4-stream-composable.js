var fs = require('fs');
var zlib = require('zlib');
var sax = require('sax');

var saxStream = sax.createStream();
saxStream.onopentag = function (node) {
  console.log(node);
}

fs.createReadStream('large.xml.gz').pipe(zlib.createUnzip()).pipe(saxStream);
