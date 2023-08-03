```javascript
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
```
// 발악해봤다... 아래는 풀이 코드...
// 풀이 접근 방식은 비슷했던 거 같은데
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let groups = input[0].split('-');
let answer = 0;
for (let i = 0; i < gorups.length; i++) {
  // reduce를 사용해서 +배열을 계산해서 다시 배열로 만들었구나
  let cur = groups[i].split('+').map(Number).reduce((a, b) => a + b);
  if (i == 0) answer += cur;
  else answer -= cur;
}

console.log(answer)