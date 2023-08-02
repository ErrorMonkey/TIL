// 단어 정렬
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

function compare (a, b) {
  for (let i = 0; i < n; i++) {
    if (a.length != b.length) return a.legnth - b.legnth;
    else return a - b;
  }
}
arr.sort(compare);

let answer = "";
for (let i = 0; i < n; i++) {
  answer += arr[i] + '\n';  
}

console.log(answer);
// 아직 집합을 제대로 못 다뤄서 건너뛰고 일단 코드만 써봤다.
// 아래는 풀이 코드. 집합에 익숙해지자.