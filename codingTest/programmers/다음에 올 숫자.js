function solution(common) {
  let n = common.length - 1
  let answer = 0;
  if ((common[n] - common[n - 1]) == (common[n - 1] - common[n - 2])) {
      answer = common[n] + (common[n] - common[n - 1]);
  } else {
      answer = common[n] * (common[1] / common[0]);
  }
  return answer;
}
// 이렇게 풀었는데 지저분하다...
// 삼항연산자를 사용한 다른 사람 풀이 코드
function solution(common) {
  const compare1 = common[1] - common[0]
  const compare2 = common[2] - common[1]
  
  return compare1 === compare2 ? common.at(-1) + compare1 : common.at(-1) * (common[1]/common[0])
}