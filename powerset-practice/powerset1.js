function powerset(targetArr, targetVal) {
  let withValResult;
  let withoutValResult;

  targetVal = targetVal ? targetVal : targetArr[0];

  const withVal = targetArr.slice();
  const withoutVal = targetArr.filter(e => e !== targetVal);

  const nextTargetVal = targetArr[targetArr.indexOf(targetVal) + 1];

  if (nextTargetVal) {
    withValResult = powerset(withVal, nextTargetVal);
    withoutValResult = powerset(withoutVal, nextTargetVal);
  }
  else {
    withValResult = [withVal];
    withoutValResult = [withoutVal];
  }

  return withValResult.concat(withoutValResult);
}

const arr = ['a', 'b', 'c'];
console.log(powerset(arr));