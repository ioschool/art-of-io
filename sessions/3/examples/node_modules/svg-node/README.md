# svg-node [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Tiny module to create an SVG element.

## Usage

[![NPM](https://nodei.co/npm/svg-node.png)](https://nodei.co/npm/svg-node/)

### createElement(nodeName, [document])

Creates a new SVG element named `nodeName`. For example:

``` javascript
var createNode = require('svg-node')

var svg = createNode('svg')
var rect = createNode('rect')

rect.setAttribute('x', 0)
rect.setAttribute('y', 0)
rect.setAttribute('width', 20)
rect.setAttribute('height', 20)
rect.setAttribute('fill', '#f00')

svg.setAttribute('width', 20)
svg.setAttribute('height', 20)
svg.appendChild(rect)

document.body.appendChild(svg)
```

If you're working in a weird environment and need to pass in your
own `document` object you can do so using the function's second
argument.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/svg-node/blob/master/LICENSE.md) for details.
