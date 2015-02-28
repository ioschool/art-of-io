var fs = require('fs')
var JSONStream = require('JSONStream')
var through = require('through2')

fs.createReadStream('npm.json')
  .pipe(JSONStream.parse("rows.*.doc"))
  .pipe(filterByKeyword("stream"))
  .pipe(getNames())
  .pipe(process.stdout)

function getNames () {
  return through.obj(function (pkg, enc, next) {
    if (pkg.name)
      this.push(pkg.name + "\n")
    next()
  })
}

function filterByKeyword (keyword) {
  return through.obj(function (pkg, enc, next) {
    if (!pkg || !pkg.keywords) return next()
    if (pkg.keywords.indexOf(keyword) !== -1) {
      this.push(pkg)
    }
    next()
  })
}
