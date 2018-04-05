pipe(parseInt, doubleNum, delayPrint)('2018');

function doubleNum(num) {
  return num * 2;
}

function delayPrint(num) {
  setTimeout(() => console.log(num), 1000);
}

function pipe(...funs) {
  function innerFunc(value) {
    const result1 = funs[0](value);
    const result2 = funs[1](result1);
    const result3 = funs[2](result2);
    return result3;
  }
  return innerFunc;
}


