var a = new Buffer('deadbeef000000ff', 'hex');
var b = new Buffer(123); b[100] = 10;

console.log(a.readInt32LE(2));
console.log(a.readDoubleLE(0));

b.write('test!', 0);
console.log([b.toString()]);

var arabic = "العربية/عربي";
console.log(Buffer.byteLength(arabic, 'utf8'));
console.log(arabic.length);
console.log(arabic);
var ar = new Buffer(arabic, 'utf8');
console.log(ar.length);
console.log(arabic.charCodeAt(0));
console.log(ar[0]);
