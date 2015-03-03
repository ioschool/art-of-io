var hello = require('./hello');
var timers = require('timers');

timers.setInterval(hello, 1 * 1000);

console.log("end of file");
