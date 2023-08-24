//! javaScript 세상에서의 함수는 그 어느 것보다 자유롭다.
// -> javaScript의 함수는 일급객체다!
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// 복습) 함수 정의하는 법.
// function 키워드 + 함수명 + (매개변수) + {수행할 작업 + return 반환할 값}
function func(arr) {
    arr.push("추가된 요소");
    return '배열이 아닙니다'
}
let result = arr.map(function (el) { return el * 2;});



// map, filter메서드의 전달인자는 함수이다.
// map에 전달된 함수(콜백함수)는 배열의 각 요소에 수행할 작업에 대한 함수이다.
console.log(arr);
arr.push(9)
// filter에 전달된 함수는 배열의 각 요소를 필터링할 조건에 대한 함수이다.
arr.filter(function (el) {
  return el % 2 === 0;
});


// 배열의 모든 요소에 2를 곱한 새로운 배열을 리턴하는 함수
function mapping(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

console.log(mapping(arr));

// 배열 내장 메서드 map (고차함수)
const mappedArr = arr.map(function (el) {
  return el * 2;
});

console.log(mappedArr);

// 배열의 모든 요소를 순회하며 짝수만을 요소로 가진 새로운 배열을 리턴하는 함수
function filtering(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filtering(arr));

// 배열 내장 메서드 filter (고차함수)
const filteredArr = arr.filter(function (el) {
  return el % 2 === 0;
});

console.log(newArr);


arr.map(function (el) { return el * 3} )