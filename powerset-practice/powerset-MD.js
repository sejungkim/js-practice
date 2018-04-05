function powerset(arr) {
  let result = [];
  if (arr.length === 0) {
    result.push([]);
  }
  else {
    let lastVal = arr.pop();
    result = result.concat(powerset(arr));
    result.forEach(e => { result.push(e.concat(lastVal)) });
  }
  return result;
}

var data = ['a', 'b', 'c'];
console.log(powerset(data));