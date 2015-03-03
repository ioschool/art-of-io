var test = require('tape')
var ObservStream = require('../')
var ObservStruct = require('observ-struct')
var Observ = require('observ')

test('observ-struct', function(t) {
  t.plan(1)

  var state = ObservStruct({
    test: Observ(1)
  })

  ObservStream(state)
    .on('data', function(current) {
      t.equal(current.test, 5, 'streams observ-struct changes')
    })

  state.test.set(5)
})
