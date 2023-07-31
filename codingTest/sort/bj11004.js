```
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let nk = input[0].split(' ');
let n = Number(nk[0]);
let k = Number(nk[1]);

let tempArr = input[1].split(' ');
let arr = [];
for (let i = 0; i < tempArr.length; i++) {
  arr.push(Number(tempArr[i]))
}

arr.sort(function (a, b) {
  return a - b;
})

console.log(arr[k - 1]);
```
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let nk = input[0].split(' ');
let n = Number(nk[0]);
let k = Number(nk[1]);
// 풀이 코드는 이렇게 깔끔하게 쓰더라 참고
// let [n, k] = input[0].split(' ').map(Number);

let arr = input[1].split(' ').map(Number);

arr.sort(function (a, b) {
  return a - b;
})

console.log(arr[k - 1]);

