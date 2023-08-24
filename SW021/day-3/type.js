// JavaScript에는 7개의 데이터 타입이 있다.
// 1. number, 2. string, 3. boolean, 4. undefined, 5. null, 6. symbol, 7. object
let num=2;
for(let i =1; i <=9; i+=1){
  console.og(`${num)*${i}=${num*i}`
} 

for(i=)




console.log(typeof 1);
    console.log(typeof '1');
    console.log(typeof true);
    console.log(typeof undefined); 
    console.log(typeof null);
    console.log(typeof Symbol('key'));
    console.log(typeof {});
    // *symbol: ES6부터 등장한 새로운 타입. 그러나 아직 알 필요가 없습니다.
    // *object: 참조 자료형으로 따로 분류 (Unit9, Unit10에서 자세히 다룰 예정)
    // 우선 number, string, boolean*에 대해서 잘 아는 것이 중요!

// 1. number type(숫자)
    // JavaScript에서는 숫자는 모두 number type => 정수, 소수, 실수, n진법 구분 없음
    let pi = 3.141592;
    let integer = -100;
    let binary = 0b01000001; //2진수 65
    let hex = 0x41; // 16진수
    console.log(typeof hex);
    console.log(typeof binary);
    console.log(hex);
    console.log(binary);

    // 숫자끼리 단순한 사칙연산을 수행할 수 있습니다. (+, -, *, /) + %
    console.log(100 + 100);
    console.log(100 - 100);
    console.log(100 * 100);
    console.log(100 / 100);
    console.log(100 % 9); //
    console.log(binary + hex);

    // NaN은 'Not a number'의 줄임말입니다. 
    // 숫자가 아닌 값에 숫자 타입의 연산을 하려고 하면 NaN이 반환됩니다.
    console.log(undefined + 1); // ?
    console.log(typeof NaN); // ?

    // Math내장객체 -> 암기x 필요할 때마다 찾아서 쓰자. (mdn, javascript info, w3)
    // mdn: https://developer.mozilla.org/ko/
    // javascript info: https://ko.javascript.info/
    // w3school: https://www.w3schools.com/js/default.asp

    console.log(Math.floor(100.621));
    Math.ceil(100.621);  // ? 101
    Math.round(100.621); // ? 101
    Math.round(100.421); // ? 100
    Math.abs(-100); // ? 100
    Math.abs(100); // ? 100
    Math.sqrt(4); // ? 2
    Math.sqrt(2); // ? 1.1414~
    Math.pow(2, 5); // ? 32


// 2. string type (문자열)
    // 문자열은 ''(작은따옴표), ""(큰따옴표), ``(백틱)으로 감싼 값입니다.
    // 가장 일반적으로 '',  
    let company = 'codestate';
    // ''안에 따옴표를 넣어야 할 때는 "",
    let string = "He said, 'Good Luck!'";
    // 템플릿 리터럴 사용시 ``
    let templeate = '여러분!';
    console.log(`Hello! ${templeate}`);
    // 꼭 문자열만 넣을 수 있는 것은 아닙니다.
    let cohort = 44;
    console.log(`Hello! ${cohort}기`);
    // 템플릿 리터럴에서는 줄바꿈과 공백이 허용됩니다.

    let intro = `
        안녕하세요.
        저는 코드스테이츠 교육엔지니어
        곽운도입니다.
    `;
    let company = 'codestates'
    // 문자열은 index를 조회할 수 있습니다.
    console.log(company[5]) // t
    console.log(company[1]) //? 
    console.log(company[0]) //?
    // 문자열에 사용할 수 있는 메서드
    let str1 = 'Hello';
    let str2 = 'World';
    str1 = str1.concat(str2);
    console.log(str1); // ?
    str2 = str1.slice(0, 2)
    console.log(str2); // ? 
    console.log(str1.toUpperCase()); // ?
    console.log(str1.toLowerCase()); // ?
    console.log(str1.includes('o')); // ? true
    console.log(str1.includes('z')); // ? false
    console.log(str1.indexOf('o')); // ? 4
    console.log(str1.indexOf('z')); 

// 3. Boolean type
    // true와 false만 존재합니다.
    true
    false

    // 비교연산자
    console.log(5 < 6); // true
    console.log(5 >= 6);
    console.log(5 > 6)
    console.log(5 <= 5);
    console.log(10 === 10);
    console.log('10'!== '10');
    // JavaScript에서 ==를 사용하지 않는 이유
    console.log(1 == '1'); // ?
    console.log(1 === '1');
    console.log(0 == false); // ?
    console.log(0 === false);
    console.log('' == 0); // ?
    console.log('' === 0);

    // falsy한 값
    console.log(!!0);
    console.log(!!'');
    console.log(!!undefined);

    // AND(&&) 연산자 
    console.log(true && true)
    console.log(true && false)
    console.log(false && true)
    console.log(false && false)

    // OR(||) 연산자
    console.log(true || true)
    console.log(true || false)
    console.log(false || true)
    console.log(false || false)


// 4. undefined
    // undefined타입인 값은 undefined가 유일합니다.
    console.log(typeof undefined)
    // 아무것도 할당하지 않은 변수는 undefined가 할당됩니다. (초기화)
    let str;
    console.log(str); // ?

// 5. null
    // null타입인 값은 null이 유일합니다.
    // undefined가 아무것도 할당되지 않았다는 것을 의미한다면,
    // null은 '비어 있는 상태'를 의도적으로 명시할 때 사용합니다.
    let varNull = 'codestates';
    // 이전에 할당된 값을 더이상 사용하지 않고 비어있는 상태로 둘때 null을 사용합니다.
    varNull = null;


let age = 17;

if (age < 8) {
  console.log("미취학 아동입니다");
} else if (age < 14) {
  console.log("초등학생입니다.");
} else if (age < 17) {
  console.log("중학생입니다.");
} else if (age < 20) {
  console.log("고등학생입니다.");
} else {
    console.log('성인입니다.')
}