const s = 'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기';

const split = str => str.split(",");
const trimmedArray = arr => arr.map(val => val.trim());

function makeTodoObject(arr) {
  return arr.reduce((obj, target) => {
    const keyAndVal = target.split('$');
    obj[keyAndVal[0]] = obj[keyAndVal[0]] || [];
    obj[keyAndVal[0]].push(keyAndVal[1]);
    return obj;
  }, {});
}

console.log(makeTodoObject(trimmedArray(split(s))));