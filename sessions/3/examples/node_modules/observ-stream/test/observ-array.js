var test = require('tape')
var ObservStream = require('../')
var ObservArray = require('observ-array')
var Observ = require('observ')

test('observ-array', function(t) {
  t.plan(1)

  var state = ObservArray([
    Observ(1)
  ])

  ObservStream(state)
    .on('data', function(current) {
      t.equal(current[0], 5, 'streams observ-array changes')
    })

  state.get(0).set(5)
})
