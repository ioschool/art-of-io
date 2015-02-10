var hello = require('./hello');
var bye = require('./bye');
var timers = require('timers');

timers.setTimeout(hello, 0);
bye();
