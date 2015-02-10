var bespoke = require('bespoke');

require('highlight.js').initHighlightingOnLoad();

var QS = require('querystring');
var query = QS.parse(window.location.search.substring(1));

if (query.notes) {
  document.querySelector('main').classList.add('container');
} else {
  bespoke.from('.presentation', [
    require('bespoke-classes')(),
    require('bespoke-keys')(),
    require('bespoke-touch')(),
    require('bespoke-scale')(),
    require('bespoke-hash')(),
    require('bespoke-progress')(),
    require('bespoke-theme-voltaire')(),
  ])
  ;
}

