// ! 함수를 정의하는 세 가지 방법
// 1. 함수선언문: 함수 선언 키워드로 함수를 선언한다.
// 키워드 함수명 (매개변수) {실행할 코드 + return 반환할 값}
function funcDeclaration(str) {
  return str;
}
console.log(funcDeclaration("함수선언문"));

// 2. 함수표현식: 변수 선언 키워드로 함수를 선언한다.
// 변수 선언 키워드 + 변수명 + 익명 함수
const funcExpression = function () {
  return "함수표현식";
};
console.log(funcExpression());

// 3. 화살표함수
const funcArrow = () => {
  return "화살표함수";
};
console.log(funcArrow());

// 함수 내부가 하나의 문으로 이루어져 있다면 코드블록({})과 return을 생략할 수 있다.
const add = (x, y) => x + y;
console.log(add(3, 5));

// 매개변수가 1개일 경우 매개변수를 감싸는 소괄호를 생략할 수 있다.
const subtract10 = x => x - 10; // const subtract10 = (x) => x - 10;
console.log(subtract10(48));
