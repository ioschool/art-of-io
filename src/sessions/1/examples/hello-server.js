var http = require('http')

function handler (req, res) {
  res.end("hello world!")
}

var server = http.createServer(handler)

server.listen(5000)
