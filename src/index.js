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
    var dataQuery = el.dataset.query;
    if (dataQuery === '.') {
      el.setAttribute('href', el.getAttribute('href') + search);
    } else {
      var context = extend(params);
      safeEval("__out = " + dataQuery, context);
      var query = context.__out;
      console.log("query", query);
      el.setAttribute('href', el.getAttribute('href') + "?" + QS.stringify(query));
    }
  });

}

queryize(query);

if (query.notes) {
  document.querySelector('main').classList.add('container');
} else {
  var notesOnly = document.querySelector('.notes-only');
  if (notesOnly) notesOnly.classList.add('hidden');

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

