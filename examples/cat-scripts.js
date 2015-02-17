var xhr = require('xhr')
var dom = require('domquery')

function getCat (callback) {
  xhr("/meow", function (err, res) {
    callback(err, JSON.parse(res.body))
  })
}

function addCat (catObj) {
  var catView = 
    "<div class='cat'>" +
      "<h2>{face}</h2>" +
      "<h3>{name}</h3>" +
      "<img src='{image}'/>" +
    "</div>"

  dom('.cats').add(catView, catObj)
}

dom('.add-cat').on('click', function (ev) {
  getCat(function (err, catObj) {
    if (!err) addCat(catObj)
  })
})
