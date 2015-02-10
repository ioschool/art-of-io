var hello = require('./hello');
var bye = require('./bye');
var timers = require('timers');

timers.setTimeout(hello, 0);

timers.setTimeout(bye, 3 * 1000);

console.log("end of file");
