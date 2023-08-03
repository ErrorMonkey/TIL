const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split(' ').map(Number)
arr.sort(function (a, b) {
  return a - b;
})

let answer = ""
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + " "
}

console.log(answer)

// 아래는 처음 썼던 코드. 출력형식이 다르다고 떴는데 이유를 모르겠음 어쨌든 콘솔에서 돌려보면 정렬이 되긴 된다. 마지막 출력 형식도 스트링인데? 이유가 뭘까.
```javascript
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

function compare(a, b) {
  return a - b;
}
input.sort(compare)

let answer = "";
for (let i = 0; i < input.length; i++) {
  answer += input[i] + ' '
}

console.log(answer)
```
