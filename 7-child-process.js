var cp = require('child_process');

var ls = cp.spawn('ls', ['-l']);

ls.stdout.pipe(process.stdin);

var ls1 = cp.exec('find .', function(err, stdout, stderr) {
   console.log(stdout);
});
