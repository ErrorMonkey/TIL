const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
```
let sugar = Number(input[0]);
let answer = 0;

if ((sugar % 5 !== 0) || (sugar % 3 !== 0)) {
  for (s = sugar; s % 5 == 0; s - 3) {
    answer += 1
  }
  answer += sugar / 5;
} else if (sugar % 3 == 0){
  answer += sugar / 3;
} else if (sugar % 5 == 0){
  answer += sugar / 5;
} else {
  answer = -1;
}
console.log(answer);
```
// 장시간 삽질하다 풀이코드 봤는데
// 5로 나누어 떨어질 때까지 3을 빼는 게 포인트...
let n = Number(input[0])
let cnt = 0;
let flag = false;

while (n >= 0) {
  if (n == 0 || n % 5 == 0) {
    cnt += parseInt(n / 5);
    console.log(cnt);
    flag = true;
    break;
  }
  // 나머지 없이 5로 나누어지거나 0이 아니라면
  // if문을 무시하고 계속 3을 빼는 구조
  n -= 3;
  cnt += 1;
}
if (!flag) {
  // 만약 if 문을 거치지 않고 while문이 끝나면
  // 3, 5로 나눌 수 없는 숫자이므로
  // flag가 false인 상태라 -1 출력
  console.log(-1);
}