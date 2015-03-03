var say = require('./say');
var timers = require('timers');

var text = process.argv[2];

timers.setInterval(say(text), 1 * 1000);

console.log("end of file");
