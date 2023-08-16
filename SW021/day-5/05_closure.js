//! 클로저: 클로저는 함수와 그 함수가 선언된 렉시컬 환경/ 과의 조합이다. (mdn)
// 클로저는 나와, 내가 태어난 고향의 조합이다.
// 외부 함수보다 중첩 함수가 더 오래 유지되는 경우
// 중첩 함수는 이미 생명주기가 종료한 외부 함수의 변수를 참조할 수 있다.

// ! 클로저 사용 예시 : 상태(state)를 은닉
const x = 1;
function outer() {
  // 지역변수 x 선언
  const x = 10;
  // inner함수 정의
  const inner = function () {
    console.log(x);
  };
  // 내 상위 스코프는 outer였지.. 그리고 거기에는 x라는 변수가 있었어...
  // inner함수를 그대로 리턴
  return inner;
}
// outer의 역할은 여기서 끝.

//중첩 여부와 상관없이
const innerFunc = outer();
innerFunc(); // outer함수 내부에 있는 inner함수를 실행한다.

// ! 예제1
// 다음 코드를 실행했을 때 total의 값은 무엇인지 고르세요.
let add = function (x) {
  let sum = function (y) {
    return x + y;
  };
  return sum;
};

let foo = add(1); // foo에 add함수 내부에 x가 1로 전달된 sum함수를 전달
foo(3); // 4
let total = foo(6);
console.log(total); // ?

// ! 카운트 상태 변수
let count = 0;

const increase = function () {
  return ++count;
};

console.log(increase());
console.log(increase());
console.log(increase());
// 그러나 외부에서 count에 접근하여 변경이 가능하므로 위험..

// ! 클로저 모듈패턴
const makeCounter = function () {
  let value = 0;
  return {
    increase: () => {
      value = value + 1;
    },
    decrease: () => {
      value = value - 1;
    },
    getValue: () => value,
  };
};

const counter = makeCounter();
counter.increase()
counter.increase();
counter.increase();
console.log(counter.getValue());