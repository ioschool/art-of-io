var http = require('http')
var ecstatic = require('ecstatic')
var browserify = require('browserify')
var websocket = require('websocket-stream')
var through = require('through2')
var mod = require('mod-op')

var staticHandler = ecstatic('./')

function httpHandler (req, res) {
  if (req.url === '/client.js') {
    browserify('./client.js').bundle().pipe(res)
  } else {
    staticHandler(req, res)
  }
}

var httpServer = http.createServer(httpHandler)

httpServer.listen(5000)

var Observ = require('observ')
var ObservStream = require('observ-stream')

var initialPosition = [25, 25]
var positionObserv = Observ(initialPosition)
var positionStream = ObservStream(
  positionObserv, { objectMode: false }
)

positionObserv(function onChange (position) {
  console.log("position changed", position)
})

function wsHandler (stream) {
  console.log("new connection!")

  // send current position to client
  var position = positionObserv()
  stream.write(JSON.stringify(position))

  // send updated positions to client
  positionStream.pipe(stream)
  stream.on('close', function () {
    positionStream.unpipe(stream)
  })

  // receive actions from client
  // and handle them by updating position
  stream.pipe(handleActions())
}

function handleActions () {
  return through(function (buf, enc, next) {
    var key = buf.toString()
    console.log("key", key)

    var pos = positionObserv();

    switch (key) {
      case "right":
        pos[0] = mod((pos[0] + 1), 100)
        break
      case "left":
        pos[0] = mod((pos[0] - 1), 100)
        break
      case "up":
        pos[1] = mod((pos[1] + 1), 100)
        break
      case "down":
        pos[1] = mod((pos[1] - 1), 100)
        break
      default:
        return next()
    }

    console.log("position", pos)

    positionObserv.set(pos)

    next()
  })
}

websocket.createServer({
  server: httpServer,
}, wsHandler)


