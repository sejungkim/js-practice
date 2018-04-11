function powerset(arr, subset = [], idx = 0, result = []) {
  result.push(subset.slice());
  while (idx < arr.length) {
    subset.push(arr[idx]);
    idx += 1;
    result = powerset(arr, subset, idx, result);
    subset.pop();
  }
  return result;
}

var data = ['a', 'b', 'c'];
console.log(powerset(data));