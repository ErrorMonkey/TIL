const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[0].split('-')
let cal = []

for (let i = 0; i < numbers.length; i++) {
  let arr = numbers[i].split('+').map(Number)
  for (let j = 0; j < numbers[i].length; j++) {
    cal[i] += arr[j]
  }  
}
for (let i = 1; i < cal.length; i++) {
  cal[0] -= cal[i];
}

console.log(cal[0])

// 발악해봤다...