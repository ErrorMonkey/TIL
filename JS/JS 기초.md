```plaintext
자주 사용하는 필수 자바스크립트 메소드 정리
```

### 자바스크립트 String
```javascript
Object.toString()
// 호출한 객체를 문자열로 반환
String.indexOf(searchValue)
// 호출한 문자열에서 매개변수가 위치한 인덱스를 반환, 없으면 -1 반환
.lastIndexOf()

String.charAt(index)
// 지정 인덱스의 유니코드 단일문자 반환
.slice(beginIndex, endIndex)
// 시작 인덱스부터 문자열 반환
// 종료 인덱스 추가하면 시작 인덱스부터 종료 인덱스 직전까지 문자열을 반환
.split('')
// 문자열을 기준으로 배열로 반환
.join('')
// '', ' ' 떨어져있는 문자를 문자열로 붙여준다
.reverse()
.replace(pattern, replacement)
// 문자열에서 패턴을 찾아서 리플레이먼트로 변환
.match()
// 정규표현식으로 지정한 문자열을 인덱스, 인풋 등과 배열로 반환
.trim()
// 문자열에서 앞뒤 공백을 제거 
String.repeat(count)
// 문자열을 반복해서 반환
```
### 자바스크립트 Math
```javascript
Math.abs(-12)
// 절대값으로 반환 output: 12
Math.min(2, 8)
// 매개 변수 중 작은 값을 반환 output: 2
Math.max(2, 8)
// 매개 변수 중 큰 값을 반환 output: 8
Math.ceil(3.14)
// 소수점 올림 처리 output: 4
Math.floor(3.14)
// 소수점 내림 처리 output: 3
Math.round(3.14)
// 소수점 반올림 처리 output: 3
Math.random()
// 0부터 1 사이 난수 반환 output: 0.234251455
**
// 거듭 젭곱 연산자
console.log(3 ** 4);
// Expected output: 81
console.log(10 ** -2);
// Expected output: 0.01
console.log(2 ** (3 ** 2));
// Expected output: 512

.trunc()

// 문자열을 수로 변환하는 .parseInt()와 Number()의 차이
parseInt("2023년") // 2020
Number("2023년") // NaN
parseInt("제3회") // NaN
Number("제3회") // NaN
parseInt('') // NaN
Number('') // 0
parseInt("3.145") // 3
Number("3.145") // 3.145
// Number가 더 빠르게 동작한다
```
### 자바스크립트 Array
```javascript
(...arr)
// 배열 전체를 받아오는 신박한 녀석
// 구조 분해 할당

.find()
// 콜백함수 조건에 맞는 첫 번째 데이터를 찾아서 반환
.length()
// 배열 내 데이터 수를 반환
.concat()
// 매개 변수로 들어온 배열을 합쳐서 새 배열로 반환
.forEach(function (element, index, array) {
	console.log(element, index, array)
})
// 콜백함수에 배열 데이터를 순서대로 모두 넣는데 반환은 안 함
.map()
// 배열을 콜백함수에 넣어서 모두 새 배열로 반환
.filter()
// 배열을 콜백함수로 걸러서 트루인 데이터만 새 배열로 반환
.reduce((a, b) => Math.max(a, b))
.reduce((a, b) => (a + b) / n)
// 배열 요소를 콜백함수에 넣어서 하나의 결과값 반환
// 다양하게 활용 가능 익숙해지자

.split()
// 조건으로 잘라서 새 배열을 만들어 반환
.push()
// 배열 맨 뒤에 매개변수를 넣음
.unshift()
// 배열 앞에 매개변수를 넣음

.reverse()
// 배열 데이터 순서를 뒤집음
.splice(startIndex, deleteCount, item)
// 배열 안에서 지정한 인덱스부터 카운트만큼 데이터를 지움
// 지정 인덱스에 item을 데이터로 끼워넣을 수도 있음
// 배열을 수정할 뿐 변수에 바로 넣는 거 불가능
// 프로그래머스 문자열 겹치기
let answer = temp.splice(s, overwrite_string.length, overwrite_string).join(''); // temp에는 splice로 정리한 배열이 제대로 저장되나 answer에는 temp가 들어가는 게 아니라 splice로 자른 내용만 들어감. join도 temp만 합치고 answer에 들어가는 내용은 안 합쳐줌.
.slice()
// 
```
### 자바스크립트 Object
```javascript
Object.assign(target, source)
// 타깃에 소스의 객체 속성을 덮어 씌워서 타깃을 반환, 소스 객체는 여러개 쓸 수 있음

Object.keys()
// 객체의 키만 배열로 반환
```