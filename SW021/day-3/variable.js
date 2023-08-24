// // 변수 선언과 값 할당
let user; // 변수의 선언
user = "kimcoding"; // 값의 할당
console.log(user)
// 변수 선언과 값의 할당은 동시에 할 수 있습니다.
let variable = "variable";

// 변수를 선언하는 방법은 사실 세 가지나 있습니다.
// var, let, const 같은 것들을 '키워드'라고 부릅니다.
// // 일종의 명령어인데, JavaScript엔진이 어떤 작업을 수행할지 알려주는 기능을 합니다.
// // function, return 등도 다 키워드입니다.
// var num1 = 1; // var는 옛날 방법입니다. (ES6 나오기 전)
let num2 = 2; // let은 var가 가진 문제점을 보완한 신문법입니다. (ES6 이후)
console.log(num2) //2
num2 = 3;
console.log(num2) // 3
// // => 어떤 문제점이고, 어떻게 보완했을까요? 궁금하신 분들은 공부해 보세요!
// const num3 = 3; // const로 선언한 변수는 재할당이 불가능합니다.
// console.log(num3// 3
// num3 = 4;
// console.log(num4)// ???

// 네이밍 컨벤션
// JavaScript에서 이름을 지을 때는 PascalCase? snake_case?
// camelCase!
// 🐪카멜 케이스(camelCase)
let firstName = "coding";
let lastName = "kim";
변수명, 함수명, 클래스명(식별자) -> 카멜케이스

// 그밖에 네이밍 컨벤션
let first_name; // 🐍스네이크 케이스(snake_case) : 단어와 단어 사이에 언더스코어(_)를 사용
let FirstName; // 📐파스칼 케이스(PascalCase) : 단어의 시작을 대문자로 작성

// ? 변수를 선언하는 이유는?
console.log(3 * 1);
console.log(3 * 2);
console.log(3 * 3);
console.log(3 * 4);
console.log(3 * 5);
console.log(3 * 6);
console.log(3 * 7);
console.log(3 * 8);
console.log(3 * 9);

let num = 4;
console.log(num * 1);
console.log(num * 2);
console.log(num * 3);
console.log(num * 4);
console.log(num * 5);
console.log(num * 6);
console.log(num * 7);
console.log(num * 8);
console.log(num * 9);

// // ? 아무것도 할당하지 않은 변수는?
let str;
console.log(str);
