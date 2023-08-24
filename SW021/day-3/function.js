// 함수 선언문 (동사)
// 변수와 함수 각각에 맞는 키워드를 쓰면 선언 () 변수는 let, const 함수는 function
function multiplyBy2(input) {
    input = input * 2;
    return input;
}


// function 함수 선언문
// let, const 함수 표현식 -> 변수 선언할 때 쓰는 키워드

// 함수 표현식
// 함수를 만드는데 변수 키워드를 썼다? 
let divideBy2 = function (input) {
    input = input / 2;
    return input;
}

// 화살표 함수
// 매개변수가 하나일 때 () 생략가능, 함수 내부가 하나의 문으로 구성된다면 {}를 생략할 수 있다.
let divideBy3 = input => input / 3
divideBy3(3)

// 함수는 "작은 기능의 단위"입니다.
// 그 기능을 실행시키고 싶다면 '호출'해야 합니다.

function foo () {
    return 1 + 2;
}
let result = foo()
console.log(result) // 3

// 용어 통일 : 매개변수(parameter), 전달인자(argument)
// 함수를 정의할 때 () 안에 넣는 것을 지금부터는 매개변수라고 하겠습니다. (약속)
function foo (x, y) { // x, y는 함수 foo의 매개변수.
    return x + y;
};
// 함수를 호출할 때 () 안에 넣는 것을 지금부터는 전달인자라고 하겠습니다. (약속)
let result = foo(120, 256);
console.log(result);

// 매개변수와 전달인자는 함수내부에서 1:1로 매칭됩니다.
// 즉 foo함수 내부에서 x = 120, y = 256입니다.

// 매개변수의 갯수 > 전달인자의 갯수
function foo4 (x, y, z) {
    console.log(x, y, z)
}
foo4(1, 2)

// 전달인자의 갯수 > 매개변수의 갯수
function foo5 (x, y) {
    console.log(x + y);
}
foo5('I ', 'like ', 'apple')



// console.log()와 함수 내부의 return은 어떻게 다른가요?
    console.log(1 + 2);
    // 특정한 값을 console에 기록으로 출력한다.
    // 함수 내부에서도 특정 값을 출력하도록 코드를 짤 수 있다.
    function foo1 () {
        console.log(120, 256);
    }
    foo1()
    // 하지만 그냥 호출될 때 출력이 될 뿐, 외부에서 사용은 불가능하다.
    let resultForFoo1 = foo1();
    console.log(resultForFoo1)

    // 외부에서 사용하고 싶으면? 리턴문을 작성해야 한다.
    function foo2 () {
        return num + 1;
    }

    let resultForFoo2 = foo2();
    console.log(resultForFoo2)

// 함수를 사용한 구구단 출력 방법
// 4단
let num = 4;
console.log(num * 1) 
console.log(num * 2) 
console.log(num * 3) 
console.log(num * 4) 
console.log(num * 5) 
console.log(num * 6) 
console.log(num * 7) 
console.log(num * 8) 
console.log(num * 9)
// 변수를 활용하지 않을 때보다는 편해졌지만,
// 만약 2단부터 9단까지 한 번에 출력하기 위해서는 변수가 여러 개 필요하다.

function mulTablePrinter(num) {
    for (let i = 1; i <= 9; i ++) {
        console.log(`${num} x ${i} = ${num * 1}`)
    }
}

mulTablePrinter(2)


// 이중반복문을 사용해서 더 편하게??
function mulTablePrinterIterable () {
    for(let i = 2; i <= 9; i++) {
        for(let j = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

mulTablePrinterIterable();
