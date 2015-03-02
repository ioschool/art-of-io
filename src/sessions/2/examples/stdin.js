var through = require('through2')

var tr = through(toUpper)

process.stdin
  .pipe(tr)
  .pipe(process.stdout)

function toUpper (buf, enc, next) {
  var up = buf.toString().toUpperCase()
  this.push(up)
  next()
}
