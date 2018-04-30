Currying function 구현 연습
===
### 1. Currying 이란?
여러 개의 인자를 받는 함수를 인자를 하나만 받는 함수들을 순차적으로 사용하는 형태로 바꿔서 처리하는 기법.
### 2. Currying의 장점
* Lazy Evaluation
* 함수 인자로 무한 자료 구조를 사용할 수 있다.
* 함수의 실행을 원하는 시점으로 미룰 수 있다.
* 원하는 값을 고정한 채 함수를 재활용할 수 있다.
### 3. Currying function 만들어보기
#### 3.1. 목표
* 특정 함수(여기서는 `add`)가 인자를 하나씩 순차적으로 받아 처리할 수 있게 만들어주는 `curry` 함수를 만들어본다.
* 인자를 하나씩 받을 때뿐만 아니라 여러 개를 받더라도 필요한 인자의 개수가 충족되면 함수가 실행될 수 있게 한다.
```javascript
const add = (a, b, c) => a + b + c;

add(1, 2, 3) === curry(add)(1)(2)(3); // true

curry(add)(1)(2)(3); // 6
curry(add)(1, 2)(3); // 6
curry(add)(1, 2, 3); // 6
```
#### 3.2. 구현 과정
* `curry`함수는 함수를 인자로 받고, 값을 인자로 받는 함수를 리턴한다.
```javascript
function curry(func) {
  return function (args) {
    
  }
}
```
* 인자 받는 함수 내부 동작 설계
```javascript
function curry(func) {
  return function (args) {
    // 1. 받은 func 함수가 필요한 인자의 개수가 충족되면
    // func 함수를 리턴하여 계산이 되도록 한다.
    // 2. 그렇지 않으면 다시 값을 받는 함수를 반환한다.
  }
}
```
* 설계 내용 구현
```javascript
function curry(func) {
  return function (args) {
    if (args.length === func.length) {
      return func(args);
    }
    return function (nextArgs) {
    }
  }
}
```
* 여러 개의 인자를 받아도 처리할 수 있도록 스프레드 연산자를 사용
```javascript
function curry(func) {
  return function (...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return function (...nextArgs) {
    }
  }
}
```
* 다음 인자를 받는 내부 함수 설계
```javascript
function curry(func) {
  return function (...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return function (...nextArgs) {
      // 지금까지 받은 인자와 다음에 받은 인자를 모아서
      // 위의 설계 1, 2번을 다시 진행하여
      // 계산을 할지, 또 인자를 받을지 판단할 수 있게 한다.
    }
  }
}
```
* 설계 내용 구현 :   
지금까지 받은 인자와 다음에 받은 인자를 함께 처리하기 위해 Rest parameters를 사용하고, 모은 인자를 다시 판단 혹은 계산하기 위해 인자를 받는 처음 내부 함수를 `nest`라 이름 붙이고 모은 인자와 함께 다시 호출한다.
```javascript
function curry(func) {
  return function nest(...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return function (...nextArgs) {
      return nest(...args, ...nextArgs);
    }
  }
}
```
* 리팩토링 : 익명 함수를 arrow function으로 변경
```javascript
function curry(func) {
  return function nest(...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return (...nextArgs) => nest(...args, ...nextArgs);
  }
}
```
### 4. 결과
```javascript
const add = (a, b, c) => a + b + c;

function curry(func) {
  return function nest(...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return (...nextArgs) => nest(...args, ...nextArgs);
  }
}

console.log(add(1, 2, 3) === curry(add)(1)(2)(3)); // true
console.log(curry(add)(1, 2)(3)); // 6
console.log(curry(add)(1)(2, 3)); // 6
console.log(curry(add)(1, 2, 3)); // 6
```
### 5. Currying function의 간단한 사용 예
* 3개의 숫자를 곱하는 `multiply3`이라는 함수를 curry 함수를 이용, 몇 개의 값을 고정하여 직육면체의 부피, 사각형의 넓이, 원의 둘레를 구하는 함수로 재사용할 수 있다.
```javascript
const multiply3 = (a, b, c) => a * b * c;

const getVolume = curry(multiply3);
getVolume(2, 3, 4);

const getArea = curry(multiply3)(1);
getArea(2, 3);

const getCircum = curry(multiply3)(Math.PI)(2);
getCircum(2);
```