// obj-stream.js
    
var through = require('through2')

var tr = through.obj(function (obj, enc, next) {
  console.log(obj)
  this.push((obj.n * 1000) + '\n')
  next()
})
tr.pipe(process.stdout)

tr.write({ n: 5, a: "pie" })
tr.write({ n: 10 })
tr.write({ n: 3 })
tr.end();
