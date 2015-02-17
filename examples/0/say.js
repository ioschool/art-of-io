function say (speech) {
  return function () {
    console.log(speech);
  };
}

module.exports = say;
