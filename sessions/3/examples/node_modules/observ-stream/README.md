observe-stream
==============

Node streams interface to [observ](https://www.npmjs.org/package/observ), [observ-struct](https://www.npmjs.org/package/observ-struct) and [observ-array](https://www.npmjs.org/package/observ-array)

example
-------

``` js
var ObservStream = require('observ-stream')
var ObservStruct = require('observ-struct')
var Observ = require('observ')
var ObservArray = require('observ-array')

var state = ObservStruct({
  fruits: ObservStruct({
    apples: Observ(3),
    oranges: ObservArray([])
  })
})

ObservStream(state, {objectMode: false})
  .pipe(process.stdout)

ObservStream(state.fruits.apples)
  .on('data', function(current) {
    console.log('apples', current)
  })

ObservStream(state.fruits.oranges)
  .on('data', function(oranges) {
    oranges.forEach(function (orange, index) {
      console.log('orange(%d) size', index, orange.size)
    })
  })

state.fruits.apples.set(3)
state.fruits.oranges.push(ObservStruct({size: 12}))
```

install
-------

```
npm install observ-stream
```

license
-------

MIT
