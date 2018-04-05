const pipe = (...funs) => value => funs.reduce((val, fun) => fun(val), value);

pipe(parseInt, doubleNum, delayPrint)('2018');

function doubleNum(num) {
  return num * 2;
}

function delayPrint(num) {
  setTimeout(() => console.log(num), 1000);
}