const arr = ['a', 'b', 'c', 'd'];
let result = [[], [arr[0]]];
for (let i = 1; i < arr.length; i++) {
  const copyResult = result.slice();
  const copyLength = copyResult.length;
  for (let j = 0; j < copyLength; j++) {
    copyResult[j] = copyResult[j].concat(arr[i]);
  }
  result = result.concat(copyResult);
}
console.log(result);