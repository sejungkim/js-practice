var data = [{ title: "hello", content: "good", price: 12000 },
{ title: "crong", content: "very good", price: 5500 },
{ title: "codesquad", content: "super good", price: 1200 }];

var newData = data.map(function (v) {
  var obj = { title: v.title, content: v.content, price: makeWon(v.price) };
  return obj;
});

function makeWon(number) {
  number = number + '';
  let stringArray = number.split('');
  let firstArray = stringArray.slice(0, stringArray.length - 3);
  let endArray = stringArray.slice(stringArray.length - 3);
  let result = firstArray.join('') + ',' + endArray.join('') + '원';
  return result;
}

console.table(data);
console.table(newData);