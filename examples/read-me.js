// read-me.js

var fs = require('fs');

var filename = "./read-me.jssss";

fs.readFile(filename, afterReadFile);

function afterReadFile (err, result) {
  // if error, let's throw it
  if (err) { throw err; }

  // otherwise, do something with result
  console.log(result.toString());
}
