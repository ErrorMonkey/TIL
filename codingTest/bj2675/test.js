const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
let testNumbers ;

for (let i = 1; i <= testCases; i++) {
    let answer = "";
    testNumbers = input[i].toString().split(' ');
    let n = Number(testNumbers[0]);
    let numberStr = testNumbers[1];
    for (let x of numberStr) {
        // answer += x * n;
        answer += x.repeat(n);
    }
    console.log(answer);
}

/*  정답 풀이를 보고 repaet로 수정해서 통과.
    멍청하게 자바스크립트가 유연하다는 것만 기억해서
    문자열도 대충 숫자랑 곱하면 늘어나겠거니 생각했다..
    역시 대충 아는 놈이 제일 위험하다...
    
    testNumbers = input[i].toString().split(' ');
    이미 스트링 상태니까 toString은 없어도 정답으로 나오는데
    다 썼을 때 toString과 split의 순서가 바뀌면 틀렸다고 한다.
    무슨 차이가 있는 걸까? 추가로 내일 공부하자.
*/