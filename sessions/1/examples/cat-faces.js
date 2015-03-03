var http = require('http')
var catFaces = require('cat-ascii-faces')

function handler (req, res) {
  res.end(catFaces())
}

http.createServer(handler).listen(5000)
