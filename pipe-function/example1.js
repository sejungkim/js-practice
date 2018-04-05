pipe(parseInt, doubleNum, delayPrint)('2018');

function doubleNum(num) {
  return num * 2;
}

function delayPrint(num) {
  setTimeout(() => console.log(num), 1000);
}

function pipe(...funs) {
  function innerFunc(value) {
    const parseIntFun = funs[0];
    const doubleNumFun = funs[1];
    const delayPrintFun = funs[2];
    const result1 = parseIntFun(value);
    const result2 = doubleNumFun(result1);
    const result3 = delayPrintFun(result2);
    return result3;
  }
  return innerFunc;
}


