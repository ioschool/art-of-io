
function multiplyBy (n) {
  // return a function
  // that multiplies n with a number x
  return function (x) {
    return n * x;
  }
}

var double = multiplyBy(2);
console.log(double(40));
