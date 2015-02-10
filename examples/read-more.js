// read-more.js

var fs = require('fs');

var filenames = [
  "./read-me.js", "./read-more.js",
  "./hello.js", "./bye.js", "./say.js",
];

function afterReadFile (name) {
  return function (err, result) {
    if (err) { throw err; }
    console.log(name);
  };
}

filenames.forEach(function (filename) {
  fs.readFile(filename, afterReadFile(filename));
});
