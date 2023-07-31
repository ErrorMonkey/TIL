const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = [];
for (let i = 1; i <= input[0]; i++) {
  arr.push(Number(input[i]));
}

arr.sort(function (a, b) {
  return a - b;
})

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer)

// 선택 정렬을 사용한 풀이 코드
```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    let temp = arr[i]; // swap
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
```