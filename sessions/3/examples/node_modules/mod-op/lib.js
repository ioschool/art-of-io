(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {
  return function(n, m) {
    if (typeof n === 'undefined') return null;
    if (typeof n === 'null') return null;
    if (!m) return n;
    return ((n % m) + m) % m;
  };
}));
