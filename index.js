var bespoke = require('bespoke');
var extend = require('xtend');
var safeEval = require('notevil');

require('highlight.js').initHighlightingOnLoad();

var QS = require('querystring');
var search = window.location.search;
var query = extend({
  notes: false,
}, QS.parse(search.substring(1)));

query.notes = safeEval(query.notes);

function queryize (params) {
  var anchors = document.querySelectorAll('a[data-query]');
  [].forEach.call(anchors, function (el) {
    console.log(el.href, el.dataset.query);
    var dataQuery = el.dataset.query;
    if (dataQuery === '.') {
      el.setAttribute('href', el.getAttribute('href') + search);
    } else {
      console.log("safeEval", dataQuery, params);
      var context = extend(params);
      safeEval("__out = " + dataQuery, context);
      var query = context.__out;
      console.log("query", query);
      el.setAttribute('href', el.getAttribute('href') + "?" + QS.stringify(query));
    }
    console.log(el.href, el.dataset.query);
  });

}

queryize(query);

if (query.notes) {
  document.querySelector('main').classList.add('container');
} else {
  document.querySelector('.notes-only').classList.add('hidden');
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

