pipe(parseInt, doubleNum, delayPrint)('2018');

function doubleNum(num) {
  return num * 2;
}

function delayPrint(num) {
  setTimeout(() => console.log(num), 1000);
}

function pipe(...funs) {
  return function (value) {
    return funs.reduce(function (val, fun) {
      return fun(val);
    }, value);
  };
}