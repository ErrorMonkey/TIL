const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let info = input[0].toString().split(' ');

let coinIndex = Number(info[0])
let money = Number(info[1])
let totalCoin = 0;

for (i = coinIndex - 1; i > 0; i--) {
  if (money / input[i] >= 1) {
    totalCoin += parseInt(money / input[i])
    money = parseInt(money % input[i])
  }
}
console.log(totalCoin)

// 내가 짠 코드는 왜 틀렸다고 할까?

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])

let arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]))

let cnt = 0;

for (let i = n - 1; i >= 0; i--) {
  cnt += parseInt(k / arr[i])
  k %= arr[i]
}

console.log(cnt)