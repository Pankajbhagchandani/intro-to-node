var HTTPParser = process.binding('http_parser').HTTPParser;

var CRLF = '\r\n';
var REQUEST = HTTPParser.REQUEST;
var RESPONSE = HTTPParser.RESPONSE;

var methods = HTTPParser.methods;

var kOnHeaders = HTTPParser.kOnHeaders | 0;
var kOnHeadersComplete = HTTPParser.kOnHeadersComplete | 0;
var kOnBody = HTTPParser.kOnBody | 0;
var kOnMessageComplete = HTTPParser.kOnMessageComplete | 0;

// The purpose of this test is not to check HTTP compliance but to test the
// binding. Tests for pathological http messages should be submitted
// upstream to https://github.com/joyent/http-parser for inclusion into
// deps/http-parser/test.c
function newParser(type) {
  var parser = new HTTPParser(type);

  parser.headers = [];
  parser.url = '';

  return parser;
}

//
// Test header ordering.
//
(function() {
  debugger;
  var request = Buffer(
      'GET / HTTP/1.0' + CRLF +
      'X-Filler: 1337' + CRLF +
      'X-Filler:   42' + CRLF +
      'X-Filler2:  42' + CRLF +
      CRLF);

  var parser = newParser(REQUEST);

  parser[kOnHeadersComplete] = function(info) {
    debugger;
    assert.equal(info.method, methods.indexOf('GET'));
    assert.equal(info.versionMajor, 1);
    assert.equal(info.versionMinor, 0);
    assert.deepEqual(info.headers || parser.headers,
        ['X-Filler', '1337',
         'X-Filler', '42',
         'X-Filler2', '42']);
    console.log(info.headers, parser.headers);
  };

  parser.execute(request, 0, request.length);
})();
