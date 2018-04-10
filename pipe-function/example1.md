pipe function - example1
===
### 1. 목표
```javascript
pipe(parseInt, doubleNum, delayPrint)('2018'); // 4036
```
----------
### 2. pipe function 구현 과정
#### 2.1.
파이프 함수는 함수를 인자로 받고 함수를 리턴함.
```javascript
function pipe(...func) {
  return func;
}
```
#### 2.2.
내부에 value '2018'을 받을 수 있는 함수를 만들고 리턴해야 함.
```javascript
function pipe(...funs) {
  function innerFunc(value) {
    // '2018'을 받아 각 함수를 처리해야 함
  }
  return innerFunc;
}
```
#### 2.3. 첫번째 시도
받은 함수들을 각 변수에 할당해 처리해 봄.
```javascript
function pipe(...funs) {
  function innerFunc(value) {
    const parseIntFun = funs[0];
    const doubleNumFun = funs[1];
    const delayPrintFun = funs[2];
    const result1 = parseIntFun(value);
    const result2 = doubleNumFun(result1);
    const result3 = delayPrintFun(result2);
    return result3;
  }
  return innerFunc;
}
```
#### 2.4. 리팩토링 1
인자로 받은 함수를 새로운 변수에 재할당 하지 않고 바로 사용.
```javascript
function pipe(...funs) {
  function innerFunc(value) {
    const result1 = funs[0](value);
    const result2 = funs[1](result1);
    const result3 = funs[2](result2);
    return result3;
  }
  return innerFunc;
}
```
#### 2.5. 리팩토링 2
각 함수의 결과도 새로운 변수를 사용하지 않고 중첩해서 바로 사용.
```javascript
function pipe(...funs) {
  function innerFunc(value) {
    return funs[2](funs[1](funs[0](value)));
  }
  return innerFunc;
}
```
#### 2.6. 리팩토링 3
정의된 내부 함수를 바로 리턴하도록 수정해 봄.
```javascript
function pipe(...funs) {
  return function (value) {
    return funs[2](funs[1](funs[0](value)));
  };
}
```
#### 2.7. 리팩토링 4
내부 함수를 for 문을 이용하여 입력받는 함수의 개수와 상관없이 작동될 수 있도록 수정해 봄.
```javascript
function pipe(...funs) {
  return function (value) {
    for (let i = 0; i < funs.length; i++) {
      value = funs[i](value);
    }
    return value;
  };
}
```
#### 2.8. 리팩토링 5
for 문을 reduce 메소드를 사용해 수정해 봄.
```javascript
function pipe(...funs) {
  return function (value) {
    let result = funs.reduce(function (prev, curr) {
      return curr(prev);
    }, value);
    return result;
  };
}
```
#### 2.9. 리팩토링 6
reduce 메소드를 result 변수를 거치지 않고 바로 리턴.  
reduce의 콜백함수의 인자 이름을 변경.
```javascript
function pipe(...funs) {
  return function (value) {
    return funs.reduce(function (val, fun) {
      return fun(val);
    }, value);
  };
}
```
#### 2.10. 리팩토링 7
reduce의 콜백함수를 arrow function으로 변경.
```javascript
function pipe(...funs) {
  return function (value) {
    return funs.reduce((val, fun) =>
      fun(val), value);
  };
}
```
#### 2.11. 리팩토링 8
pipe의 내부 함수를 arrow function으로 변경.
```javascript
function pipe(...funs) {
  return value =>
    funs.reduce((val, fun) => fun(val), value);
}
```
#### 2.12. 리팩토링 9
pipe 함수를 arrow function으로 변경.
```javascript
const pipe = (...funs) => value => funs.reduce((val, fun) => fun(val), value);
```
----------
### 3. 그 외 함수
doubleNum 함수와 delayPrint 함수를 arrow function으로 수정.
```javascript
const doubleNum = num => num * 2;
const delayPrint = num => setTimeout(() => console.log(num), 1000);
```
----------
### 4. 결과
```javascript
const doubleNum = num => num * 2;
const delayPrint = num => setTimeout(() => console.log(num), 1000);
const pipe = (...funs) => value => funs.reduce((val, fun) => fun(val), value);

pipe(parseInt, doubleNum, delayPrint)('2018');
```