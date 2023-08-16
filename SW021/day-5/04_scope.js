// ! 스코프 -> 변수의 유효범위
// 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만
// 하위 스코프에서 유효한 변수를 상위 스코프에서 참조할 수 없다.

// 서울에서 사는 김코딩은 서울시 복지혜택도 받을 수 있고 대한민국 복지혜택도 받을 수 있다.
// 그러나 경기도에 사는 박해커는 경기도 복지혜택은 받을 수 있지만 서울시 복지혜택은 받을 수 없다.

// 스코프가 유효한 범위는 코드블록이다. (let, const)
// var로 선언한 변수는 함수레벨 스코프
// if (true) {
//     var num = 5;
// }
// console.log(num);

// if (true) {
//     let num = 6;
// }
// console.log(num);

// ! 1번
// let x = 30;
// function get() {
//   return x; // ?
// }

// let result = get(20);
// console.log(result); //?

// ! 2번
// let x = 30;
// function get (x) {
//     return x;
// }

// let result = get(20);
// console.log(result); // ?

// !  3번
// let x = 30;
// function get () {
//     return x; // 30
// }

// function set (value) {
//     let x = value;
//     // set함수 내부에서 x? => 10
// }

// set(10);
// let result = get(20);
// console.log(result); //?

// ! 4번
// let x = 30;

// function get () {
//     return x;
// }
// function set (value) {
//     x = value;
// }

// set(10);
// let result = get(20);
// console.log(result); // ?

// ! 5번
// let x = 30;

// function get (x) {
//     return x;
// }
// function set (value) {
//     x = value;
// }

// set(10);
// let result = get(20);
// console.log(result); // ?

// ! 6번
// let x = 10;

// function add (y) {
//     return x + y;
// }

// function strangeAdd (x) {
//     return add(x) + add(x);
// }

// let result = strangeAdd(5);
// console.log(result); // ?

// ! 7번
// let x = 10;

// function outer () {
//     let x = 20;
//     function inner () {
//         return x;
//     }

//     return inner();
// }

// let result = outer();
// console.log(result); //?

// 렉시컬 스코프 -> 함수의 상위스코프는 함수가 정의되는 시점에 결정된다.
// 1. 함수를 어디서 호출했는지에 따라 함수의 상위스코프를 결정한다. (X)
// 2. 함수를 어디서 정의했는지에 따라 함수의 상위스코프를 결정한다. (O)
// let x = 1;
// function foo() {
//   // 상위스코프 저장! 상위스코프 전역
//   let x = 10;
//   bar();
// }

// function bar() {
//   // 상위스코프 저장! 상위스코프 전역
//   // let x = 5;
//   console.log(x);
// }

// foo(); // 5
// bar(); // 5
