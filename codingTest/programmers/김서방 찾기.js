// 내 풀이...
// 그나마 쉬운 문제라 풀었다고 생각했는데...
function solution(seoul) {
  let index = 0;
  for (let i = 0; i < seoul.length; i++) {
      if (seoul[i].toLowerCase() == 'kim') {
          index = i;
      }
  }
  var answer = '김서방은 ' + index + '에 있다';
  return answer;
}

// indexOf를 사용한 다른 분 풀이...
function findKim(seoul){
  var idx = seoul.indexOf('Kim');

  return "김서방은 " + idx + "에 있다";
}
