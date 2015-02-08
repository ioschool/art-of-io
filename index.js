var Metalsmith = require('metalsmith');
var plugins = require('load-metalsmith-plugins')();

var m = Metalsmith(__dirname)
.clean(false);

if (process.argv[2] === '-w') {
  m.use(plugins.watch());
}

m
.use(plugins.templates('swig'))
.build(function (err, files) {
  if (err) { throw err; }
  //console.log(files)
})
;
