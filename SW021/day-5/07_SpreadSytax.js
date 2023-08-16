// ! spread는 비교적 최근에 등장한 신규 JavaScript문법입니다 (ES6)
// 일명 쩜쩜쩜...
// ! 주로 배열을 풀어서 인자로 전달하거나, 배열을 풀어서 각각의 요소로 넣을 때에 사용합니다.

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// console.log(sum(...numbers)) // ?

// ! 배열에서 사용하기 : spread 문법은 배열에서 강력한 힘을 발휘합니다.
// 1) 배열 합치기
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];

// console.log(lyrics); // ?

// spread 문법은 기존 배열을 변경하지 않으므로(immutable), arr1의 값을 바꾸려면 새롭게 할당해야 합니다.
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];  
// console.log(arr1); // ?

// 2) 배열 복사
let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr4.push(4);
// console.log(arr3, arr4); //?

// ! 객체에서 사용하기
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
let mergedObj = { ...obj1, ...obj2 };
// console.log(clonedObj, mergedObj); //? 

// ! 함수에서 나머지 파라미터 받아오기
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// ! rest 문법 : 파라미터를 배열의 형태로 받아서 사용할 수 있습니다. 파라미터 개수가 가변적일 때 유용합니다.
function sum(...theArgs) { // theArgs = [1, 2, 3]
  return theArgs.map((el) => {
    return el * 2;
  });
}

// console.log(sum(1, 2, 3)); // ?


