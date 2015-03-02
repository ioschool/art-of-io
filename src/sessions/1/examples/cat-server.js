var http = require('http')
var fs = require('fs')
var catApi = require('./cat-api')
var browserify = require('browserify')

function handler (req, res) {
  if (req.url === "/meow") {
    catApi(req, res)
  } else if (req.url === "/") {
    fs.createReadStream("./cat-index.html").pipe(res)
  } else if (req.url === "/styles.css") {
    fs.createReadStream("./cat-styles.css").pipe(res)
  } else if (req.url === "/scripts.js") {
    browserify("./cat-scripts.js").bundle().pipe(res)
  }else {
    res.writeHead(404, 'not found')
    res.end()
  }
}

http.createServer(handler).listen(5000)
