var defaults = require('lodash.defaults')
var Readable = require('stream').Readable
var util = require('util')
util.inherits(ObserveStream, Readable)

module.exports = ObserveStream

function ObserveStream(observ, options) {
  if (!(this instanceof ObserveStream)) return new ObserveStream(observ, options)

  this.options = defaults(options || {}, {objectMode: true})

  Readable.call(this, this.options)

  observ(function(value) {
    this.push(this.options.objectMode ? value : JSON.stringify(value) + '\n')
  }.bind(this))
}

ObserveStream.prototype._read = function() {

}