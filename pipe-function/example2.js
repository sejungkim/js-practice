const split = str => str.split(",");
const trimmedArray = arr => arr.map(val => val.trim());
const makeTodoObject = arr => arr.reduce((obj, target) => {
  const keyAndVal = target.split('$');
  obj[keyAndVal[0]] = obj[keyAndVal[0]] || [];
  obj[keyAndVal[0]].push(keyAndVal[1]);
  return obj;
}, {});

const s = 'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기';
const pipe = (...funs) => value => funs.reduce((val, fun) => fun(val), value);
const result = pipe(split, trimmedArray, makeTodoObject)(s);
console.log(result);