var ns = 'http://www.w3.org/2000/svg'

module.exports = createSVGElement
module.exports.ns = ns

function createSVGElement(name, doc) {
  return (doc || document).createElementNS(ns, name)
}
