module.exports = function max (n) {
  return function (deck) {
    deck.on('next', function (e) {
      if (e.index > n) {
        return false;
      }
    });
  };
};
