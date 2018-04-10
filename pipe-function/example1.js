const doubleNum = num => num * 2;
const delayPrint = num => setTimeout(() => console.log(num), 1000);
const pipe = (...funs) => value => funs.reduce((val, fun) => fun(val), value);

pipe(parseInt, doubleNum, delayPrint)('2018');