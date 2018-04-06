var s = 'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기';

const split = str => str.split(",");

function trimmedArray(arr) {
  return arr.map(function (val) {
    return val.trim();
  });
}

console.log(trimmedArray(split(s)));