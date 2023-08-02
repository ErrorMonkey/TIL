```javascript
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let input = [['5'], ['3 4'], ['1 1'], ['1 -1'], ['2 2'], ['3 3']]

let arr = [];
for(i = 1; i <= input[0]; i++) {
  arr[i-1] = input[i].split(' ').map(Number);
}

function compare1 (a, b) {
  if(a[0] == b[0]) {
    return a[1] - b[1];
  };
  retrun a[0] - b[0];
};

sort(compare1(arr));
console.log(arr);
```
// 문제 풀이 실패... 아래는 풀이 코드
// 일단 배열 나눌 때부터 문제가 있었다 외우자

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = [];
for(let i = 1; i <= input[0]; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}

function compare (a, b) {
  if(a[0] == b[0]) {
    return a[1] - b[1];
  };
  return a[0] - b[0];
};
arr.sort(compare);

let answer = "";
for (let point of arr) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);
