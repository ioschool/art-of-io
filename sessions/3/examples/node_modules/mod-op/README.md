mod-op
======

[![Build Status](https://travis-ci.org/eiriklv/mod-op.svg?branch=master)](https://travis-ci.org/eiriklv/mod-op)
[![npm version](https://badge.fury.io/js/mod-op.svg)](http://badge.fury.io/js/mod-op)
[![Dependency Status](https://david-dm.org/eiriklv/mod-op.svg)](https://david-dm.org/eiriklv/mod-op)
[![devDependency Status](https://david-dm.org/eiriklv/mod-op/dev-status.svg)](https://david-dm.org/eiriklv/mod-op#info=devDependencies)

#### Introduction:
Modulo operator as a function for JavaScript, as it only has the remainder (`%`) operator by default.

---------------------------------------

### mod(dividend, divisor)

Perform `divident` modulo `divisor`

__Arguments__

* `dividend` - Number
* `divisor` - Number

__Example__

```js
var mod = require('mod-op');

var wrapped = mod(-128, 256);
// 128
```

---------------------------------------
