let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.push(9)); // 배열에 요소를 추가하는 함수는
console.log(arr.unshift(9)); // 변경된 길이를 리턴한다
console.log(arr.shift()); // 삭제하는 함수는 삭제하는 요소를 리턴한다
console.log(arr.pop());

console.log(arr.slice(1, 7)); // 배열에 직접 영향을 주지 않는다
console.log(arr);

console.log(arr.splice(1, 7, 'a', 'b', 'c'));
console.log(arr);

let newArr = new Array(5).fill(0);
console.log(newArr);

arr.concat(newArr)
// 콘캣은 배열을 합쳐서 새로운 배열을 만든다
// 주소가 다르기 때문에 직접 영향을 주지 않는다
arr = arr.concat(newArr)
console.log(arr + "콘캣으로 합친 배열")
// slice와 sub

console.log(arr.join(':'))

console.log(arr.indexOf('b')); // 찾는 요소의 index를 리턴한다
console.log(arr.includes('b')); // 찾는 요소가 boolean만 리턴한다
console.log(arr.indexOf(8));
console.log(arr.includes(8));



for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열의 모든 요소를 순회할 때
for (let el of arr) {
  // el === arr[i]
  console.log(el);
}

function arrToString(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result += arr[i];
    }
  }
  return result;
}