var http = require('http')
var fs = require('fs')

function handler (req, res) {
  req.pipe(process.stdout)

  fs.createReadStream('/home/michael/npm.json')
    .pipe(res)
}

http.createServer(handler).listen(5000)
