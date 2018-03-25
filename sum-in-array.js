// O(n) version
var data2 = [...Array(10)].map((v, i) => ++i);

function calculate2(arr, num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  console.log(sum);
  for (let i = 0; i < arr.length - num; i++) {
    sum += arr[i + num] - arr[i];
    console.log(sum);
  }
}

console.time('calculate2');
calculate2(data2, 3);
console.timeEnd('calculate2');


// O(n^2) version
var data1 = [...Array(10)].map((v, i) => ++i);

function calculate1(arr, range) {
  var rotationCount = arr.length - range + 1;
  for (var i = 0; i < rotationCount; i++) {
    var result = 0;
    for (var j = i; j < i + range; j++) {
      result += arr[j];
    }
    console.log(result);
  }
}

console.time('calculate1');
calculate1(data1, 3);
console.timeEnd('calculate1');
