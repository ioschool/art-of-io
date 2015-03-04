// client.js
console.log("welcome to space.");

var websocket = require('websocket-stream')
var through = require('through2')
var dom = require('domquery')
var codeToKey = require('keycode')

var stream = websocket("ws://" + location.host + "/")

var cat = dom('.cat')[0]

// receive current position from server
stream.pipe(through(function (buf, enc, next) {
  var position = JSON.parse(buf.toString())
  console.log("position", position)

  // render position as cat coordinates
  cat.setAttribute('x', position[0] + "%")
  cat.setAttribute('y', (100 - position[1]) + "%")

  next()
}))

// listen to keydown events
dom(document).on('keydown', function (ev) {
  var key = codeToKey(ev)
  console.log("key", key)

  // send key names to server
  stream.write(key)
})



