// npm-nostream.js

var fs = require('fs')

fs.readFile("npm.json", function (err, contents) {
  var registry = JSON.parse(contents)
  var pkgs = registry.rows.map(function (row) { return row.doc })
  var names = pkgs.map(function (pkg) { return pkg.name })
  names.forEach(console.log)
})
