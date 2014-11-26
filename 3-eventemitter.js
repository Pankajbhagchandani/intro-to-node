var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.on('test1', function(a, b) {
  console.log('Test1 event!', [a, b]);
  throw new Error('aaaa');
});

ee.on('test1', function(a, b) {
  console.log('Another handler', [a, b]);
});

console.log('emitting event');
ee.emit('test1', 'aaa', 123);


// inheriting from EE
var util = require('util');
function FooBar() {
  EventEmitter.call(this);
}
util.inherits(FooBar, EventEmitter);

FooBar.prototype.baz = function() {
  console.log('baz baz');
};

var fb = new FooBar();
fb.baz();
fb.on('xyz', console.log);
fb.emit('xyz', 1, 2, 3);
