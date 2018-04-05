Pipe function 구현 연습
===
### 1. Pipe에 대한 간단한 개념
파이프(Pipe)는 한 프로세스의 표준 출력(Standard output)을 다른 프로세스의 표준 입력(Standard input)으로 연결하는 방법.

### 2. pipe function 설명
#### 2.1. pipe function 사용 예
```javascript
pipe(fun1, fun2, ...)(value);
```
#### 2.2. pipe function 기능
여러 함수를 순차적으로 연결해서 실행시켜주는 함수.  
value 값을 첫 입력값으로 fun1을 실행시킨 후의 결과값이 fun2의 입력값이 되고 fun2의 결과값이 다시 fun3의 입력값이 된다.  
pipe function은 이 과정이 반복되도록 하는 역할을 하는 함수이다.

### 3. 연습
#### 3.1. example1.js
숫자로 된 문자열을 입력받아 parseInt, doubleNum, delayPrint 함수를 차례로 거쳐 문자열로 된 숫자가 2배가 되어 1초 뒤에 출력되는 간단한 프로그램을 만들어 본다.
```javascript
pipe(parseInt, doubleNum, delayPrint)('2018'); // 4036
```
#### 3.2. example2.js
아래 s와 같은 문자열을 입력받아 split, trimmedArray, makeTodoObject 함수를 차례로 거쳐 배열로 된 값을 가진 객체 데이터를 만드는 프로그램을 만들어 본다.
```javascript
var s = 'todo$공부하기 , todo$알고리즘공부 , doing$스터디하기';
pipe(split, trimmedArray, makeTodoObject)(s);
// { todo:["공부하기","알고리즘공부"],doing:["스터디하기"] }
```