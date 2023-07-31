const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

arr.sort(function(a, b) {
  return a - b;
})

let answer = "";
for (let i = 0; i < n; i++) {
  answer += arr[i] + "\n"
}

console.log(answer)

//데이터 100만 개가 들어와도 잘 작동하는 sort()!