let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];


// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// // 배열의 모든 요소를 순회할 때
// for (let el of arr) {
//   // el === arr[i]
//   console.log(el);
// }

function arrToString(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result += arr[i];
    }
  }
  return result;
}

arrToString(arr)

function arrToString(arr) {
  let result = 0;
  for (let el of arr) {
    if (el % 2 == 0) {
      result += el;
    }
  }
  return result;
}

console.log(arrToString(arr));


// 배열 내장 메서드 map(고차함수)
// 고차함수는 리액트를 사용할 때 많이 쓴다 
function mapping (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] * 2;
  }
}

const mappedArr = arr.map(function (el) {
  return el * 2;
})
console.log(mappedArr);


// filter 함수
function filtering(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

const filteredArr = arr.filter(function (el) {
  return el % 2 === 0;
})

// map과 filter의 차이
// map은 콜백 함수에 모든 요소를 넣는다
// filter는 