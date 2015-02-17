// cat-images.js

// we want to write a module that
// fetches a url to a random cat image
// and returns it via a callback
var request = require('request') // npmjs.org module

function catImages (callback) {
  var url = "http://random.cat/meow"
  request(url, function (err, res) {
    callback(err, res.body)
  })
}

module.exports = catImages
