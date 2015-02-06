var app = require('connect')();

app.use(require('ecstatic')({
  root: __dirname + "/build",
  baseDir: "/",
  cache: 0,
  showDir: false,
}));

app.listen(5000);
