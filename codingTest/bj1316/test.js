const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 내가 아는 메소드나 알고리즘으론 감도 안 와서 바로 문제 풀이 찾아봄...
function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] != data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

let n = Number(input[0]);
let summary

for (let i = 1; i <= n; i++) {
  let data = input[i];
  if (check(data)) summary += 1
}
console.log(summary)

// 집합과 .has() 메소드 모두 보고 지나갔던 건데 역시 안 써보면 전혀 떠오르지 않는다...