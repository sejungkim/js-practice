pipe(parseInt, doubleNum, delayPrint)('2018');

function doubleNum(num) {
  return num * 2;
}

function delayPrint(num) {
  setTimeout(() => console.log(num), 1000);
}

function pipe(...funs) {
  return function (value) {
    let result = funs[0](value);
    for (let i = 1; i < funs.length; i++) {
      result = funs[i](result);
    }
    return result;
  };
}