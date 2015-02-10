function say (speech) {
  return function () {
    console.log(speech);
  };
}

var hello = say("hello world!");
var bye = say("bye world...");

hello();
bye();
