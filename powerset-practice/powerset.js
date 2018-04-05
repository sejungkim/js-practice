function powerset(data) {
  let result = [[]];
  let copyResult = [];
  for (let value of data) {
    result.forEach(function (innerVal, idx) {
      copyResult[idx] = innerVal.slice();
      copyResult[idx].push(value);
    });
    result = result.concat(copyResult);
  }
  /*
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < result.length; j++) {
      copyResult[j] = result[j].slice();
      copyResult[j].push(data[i]);
    }
    result = result.concat(copyResult);
  }
  */
  result.push(result.length);
  return result;
}

let arr = ['a', 'b', 'c'];
console.log(powerset(arr));