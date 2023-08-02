// 정렬만 알면 정말 개쉬운 문제라고 생각했는데...
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
      let arr = array.slice(commands[i][0] - 1, commands[i][1]);
      arr.sort(function (a, b) {
          return a - b;
      })
      answer.push(commands[i][2] - 1); // 단순 빼기도 부동소수점이 있는 건가...
  }
  return answer;
}
// 위에 코드로는 숫자가 하나만 남아 인덱스가 0인 녀석이
// 계속 Null로 떠서 실패가 떴다...
// 그래서 강제로 정수로 바꾸니까 일단 문제는 통과
function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
      let arr = array.slice(commands[i][0] - 1, commands[i][1]);
      arr.sort(function (a, b) {
          return a - b;
      })
      let idx = parseInt(commands[i][2] - 1);
      answer.push(arr[idx]);
  }
  return answer;
}

// 화살표 함수와 .map .filter 메소드를 활용한 다른 풀이 코드
function solution(array, commands) {
  return commands.map(command => {
      const [sPosition, ePosition, position] = command
      const newArray = array
          .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
          .sort((a,b) => a - b)    

      return newArray[position - 1]
  })
}
