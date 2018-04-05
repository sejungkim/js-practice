pipe(parseInt, doubleNum, delayPrint)('2018');

function doubleNum(num) {
  return num * 2;
}

function delayPrint(num) {
  setTimeout(() => console.log(num), 1000);
}

function pipe(...funs) {
  return function (value) {
    let result = funs.reduce(function (prev, curr) {
      return curr(prev);
    }, value);
    return result;
  };
}