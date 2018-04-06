var s = 'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기';

const split = str => str.split(",");
const trimmedArray = arr => arr.map(val => val.trim());

console.log(trimmedArray(split(s)));