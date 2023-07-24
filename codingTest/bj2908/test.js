const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// 상수를 거꿀 읽는 게 상수인 상수처럼 상수를 뒤집어 반환하는 문제라...

let first = Number(input[0].split('').reverse().join(''));
let second = parseInt(input[1].split('').reverse().join(''));

if (first > second) {
  console.log(first);
} else {
  console.log(second);
}

// 난 이렇게 풀었는데 풀이 코드를 찾아보니...
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0].split('')[0];
let b = input[0].split('')[1];

let newA = a[2] + a[1] + a[0];
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newB)));

/*  메소드를 길게 늘어트리는 것도 별로 안 좋은 코드 작성법인가?
    Math를 이용해서 출력단을 더 깔끔하게 쓰는 걸 왜 생각 못 했을까 싶다
    여튼 split, reverse, join도 계속 연습하자...
*/

// for 문을 이용한 방법도 있어서 기록
// 내림차순
let newString
for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}