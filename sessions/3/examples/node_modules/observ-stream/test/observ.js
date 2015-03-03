var test = require('tape')
var ObservStream = require('../')
var Observ = require('observ')

test('observ', function(t) {
  t.plan(1)

  var state = Observ(3)

  ObservStream(state)
    .on('data', function(current) {
      t.equal(current, 5, 'streams observ changes')
    })

  state.set(5)
})
