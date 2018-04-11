멱 집합 - powerset1.js
===
### 1. powerset1.js
이 파일은 처음 생각한 멱 집합 알고리즘으로 구현해 본 것임.

### 2. 어떤 생각?
![그래프](https://rkrishnan.org/images/powerset.svg)
     
<small>이미지 출처 - <https://rkrishnan.org/posts/2013-11-25-powerset.html></small>

멱 집합을 구할 배열 데이터에서 원소 순서대로 원소 있음/없음의 결과를 구하고, 그 결과로 다시 원소 있음/없음을 반복하는 방법.

### 3. 코드 설명
#### 3.1. powerset function
원소 있음/없음을 만들 대상 배열 데이터와 있음/없음의 대상 원소를 인자로 받아 `[[특정 원소 있음], [특정 원소 없음]]`의 이중배열 형태로 결과를 리턴하는 powerset 함수를 만든다.
```javascript
function powerset(targetArr, targetVal) {
  return withValResult.concat(withoutValResult);
}
```
#### 3.2.
타겟 원소 초기값 설정
```javascript
targetVal = targetVal ? targetVal : targetArr[0];
```
#### 3.3.
타겟 원소 있음/없음
```javascript
const withVal = targetArr.slice();
const withoutVal = targetArr.filter(e => e !== targetVal);
```
#### 3.4.
다음 타켓 원소가 있다면 현재 만든 `withVal`과 `withoutVal`로 각각 powerset 함수 다시 반복.
```javascript
if (nextTargetVal) {
  withValResult = powerset(withVal, nextTargetVal);
  withoutValResult = powerset(withoutVal, nextTargetVal);
}
```
#### 3.5.
다음 타켓 원소가 없다면 결과 값을 배열로 만들어 리턴.
```javascript
else {
  withValResult = [withVal];
  withoutValResult = [withoutVal];
}

return withValResult.concat(withoutValResult);
```

### 4. 출력 결과
```javascript
const arr = ['a', 'b', 'c'];
console.log(powerset(arr));
```
```
[ [ 'a', 'b', 'c' ],
  [ 'a', 'b' ],
  [ 'a', 'c' ],
  [ 'a' ],
  [ 'b', 'c' ],
  [ 'b' ],
  [ 'c' ],
  [] ]
```