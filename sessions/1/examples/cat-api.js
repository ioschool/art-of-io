var http = require('http')
var catFaces = require('cat-ascii-faces')
var catNames = require('cat-names').random
var catImages = require('./cat-images')

function afterCatImage (res) {
  return function (err, catImage) {
    res.write(JSON.stringify({
      name: catNames(),
      face: catFaces(),
      image: catImage,
    }, null, 2))
    res.end()
  }
}

function handler (req, res) {
  catImages(afterCatImage(res))
}

module.exports = handler;

if (!module.parent) {
  http.createServer(handler).listen(5000)
}
