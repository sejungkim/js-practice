pipe(parseInt, doubleNum, delayPrint)('2018');

function doubleNum(num) {
  return num * 2;
}

function delayPrint(num) {
  setTimeout(() => console.log(num), 1000);
}

function pipe(...funs) {
  return function (value) {
    for (let i = 0; i < funs.length; i++) {
      value = funs[i](value);
    }
    return value;
  };
}