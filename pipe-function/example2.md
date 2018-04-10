pipe function - example2
===
### 1. 목표
```javascript
var s = 'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기';
pipe(split, trimmedArray, makeTodoObject)(s);
// { todo:["공부하기","알고리즘공부"],doing:["스터디하기"] }
```
---
### 2. split function
#### 2.1.
정리되지 않은 문자열 `s`를 `,`기준으로 끊어 배열로 만들어주는 split 함수를 만든다.
```javascript
function split(str) {
  return str.split(",");
}
```
#### 2.2.
split 함수를 arrow function으로 수정해본다.
```javascript
const split = str => str.split(",");
```
#### 2.3. split 결과
* Before
```
'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기'
```
* After
```
[ 'todo$공부하기 ', ' todo$알고리즘공부 ', ' doing$스터디하기' ]
```
---
### 3. trimmedArray function
#### 3.1.
배열 안에 있는 문자열이 가진 앞, 뒤의 공백을 제거한 후 다시 배열로 반환하는 trimmedArray 함수를 만든다.
```javascript
function trimmedArray(arr) {
  return arr.map(function (val) {
    return val.trim();
  });
}
```
#### 3.2.
trimmedArray 함수를 arrow function으로 수정해본다.
```javascript
const trimmedArray = arr => arr.map(val => val.trim());
```
#### 3.3. trimmedArray 결과
* Before
```
[ 'todo$공부하기 ', ' todo$알고리즘공부 ', ' doing$스터디하기' ]
```
* After
```
[ 'todo$공부하기', 'todo$알고리즘공부', 'doing$스터디하기' ]
```
---
### 4. makeTodoObject function
#### 4.1.
split과 trimmedArray를 거쳐 어느 정도 정리된 배열 데이터를 `$`기준으로 끊어 각각 객체의 키와 값으로 만드는 makeTodoObject 함수를 만든다.
```javascript
function makeTodoObject(arr) {
  const result = arr.reduce(function (obj, target) {
    const keyAndVal = target.split('$');
    if (!(keyAndVal[0] in obj)) {
      obj[keyAndVal[0]] = [];
    }
    obj[keyAndVal[0]].push(keyAndVal[1]);
    return obj;
  }, {});
  return result;
}
```
#### 4.2.
reduce에서 호출되는 콜백함수 내의 if문을 논리연산자를 이용하여 간결하게 수정해본다.
```javascript
function makeTodoObject(arr) {
  const result = arr.reduce(function (obj, target) {
    const keyAndVal = target.split('$');
    obj[keyAndVal[0]] = obj[keyAndVal[0]] || [];
    obj[keyAndVal[0]].push(keyAndVal[1]);
    return obj;
  }, {});
  return result;
}
```
#### 4.3.
* reduce의 콜백함수를 arrow function으로 수정해본다.
* makeTodoObject 함수 내의 result 변수를 거치지 않고 reduce의 결과를 바로 리턴해 더욱 간결하게 수정해본다.
```javascript
function makeTodoObject(arr) {
  return arr.reduce((obj, target) => {
    const keyAndVal = target.split('$');
    obj[keyAndVal[0]] = obj[keyAndVal[0]] || [];
    obj[keyAndVal[0]].push(keyAndVal[1]);
    return obj;
  }, {});
}
```
#### 4.4.
makeTodoObject 함수를 arrow function으로 수정해본다.
```javascript
const makeTodoObject = arr => arr.reduce((obj, target) => {
  const keyAndVal = target.split('$');
  obj[keyAndVal[0]] = obj[keyAndVal[0]] || [];
  obj[keyAndVal[0]].push(keyAndVal[1]);
  return obj;
}, {});
```
#### 4.5. makeTodoObject 결과
* Before
```
[ 'todo$공부하기', 'todo$알고리즘공부', 'doing$스터디하기' ]
```
* After
```
{ todo: [ '공부하기', '알고리즘공부' ], doing: [ '스터디하기' ] }
```
---
### 5. pipe function
example1에서 만든 pipe 함수를 이용한다.
```javascript
const s = 'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기';
const pipe = (...funs) => value => funs.reduce((val, fun) => fun(val), value);
const result = pipe(split, trimmedArray, makeTodoObject)(s);
console.log(result);
```
#### 5.1.
가독성을 위해 새로운 변수에 pipe 함수를 할당하여 사용해본다.
```javascript
const getTodoInfo = pipe(split, trimmedArray, makeTodoObject);
console.log(getTodoInfo(s));
```
### 6. 결과
```javascript
const split = str => str.split(",");
const trimmedArray = arr => arr.map(val => val.trim());
const makeTodoObject = arr => arr.reduce((obj, target) => {
  const keyAndVal = target.split('$');
  obj[keyAndVal[0]] = obj[keyAndVal[0]] || [];
  obj[keyAndVal[0]].push(keyAndVal[1]);
  return obj;
}, {});

const s = 'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기';
const pipe = (...funs) => value => funs.reduce((val, fun) => fun(val), value);
const getTodoInfo = pipe(split, trimmedArray, makeTodoObject);
console.log(getTodoInfo(s));
```