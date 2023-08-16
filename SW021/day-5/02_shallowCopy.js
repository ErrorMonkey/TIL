// ! number, string, boolean 등의 자료형(type)은 메모리에 값 자체를 저장합니다.
let num1 = 5;
let str1 = "codestates";
// 다른 변수에 할당하면 값이 그대로 복사가 됩니다.
let num2 = num1;
let str2 = str1;
console.log(str2);
console.log(num2);
// 마치 ctrl + c, ctrl + v를 한 것처럼 둘 중 하나를 변경해도 다른 하나에 영향을 미치지 않습니다.
num2 = num2 + 3;
console.log(`num1은 ${num1}, num2는 ${num2}입니다.`);
str2 = "good";
console.log(`str1은 ${str1}, str2는 ${str2}입니다.`);

// ! 배열, 객체와 같은 참조 자료형은 값이 아니라, 주소를 저장합니다.
let arr1 = [1, 2, 3, 4, 5];
let obj1 = { name: "Tom", age: 59 };
// 다른 변수에 할당하면 같은 주소를 참조합니다. 
let arr2 = arr1;
let obj2 = obj1;
console.log(arr2);
console.log(obj2);
// 같은 주소를 참조하고 있기 때문에, 하나를 변경하면 나머지 하나도 같이 변경이 됩니다.
// 즉, ctrl + c, ctrl + v되었다고 보기 어렵습니다. 
arr2.push(6);
console.log(arr1, arr2);
obj2.job = "sw engineer";
console.log(obj1, obj2);
// 그렇다면, 배열, 객체와 같은 참조자료형을 '복사'하려면 어떻게 해야 할까요?
// 1) slice(), Object.assign()
let arr3 = arr1.slice();
let obj3 = Object.assign({}, obj1);
console.log(arr3, obj3);
// 하나를 변경해도, 다른 하나에 영향을 미치지 않습니다.
arr3.pop();
delete obj3.job;
console.log(arr1, arr3);
console.log(obj1, obj3);
// 2) spread syntax
let arr4 = [...arr1];
let obj4 = {...obj1};
console.log(arr4, obj4);
arr4.pop();
delete obj4.job;
console.log(arr1, arr4);
console.log(obj1, obj4);

// ! 그러나, 위 방법도 완벽한 복사라고 볼 수 없습니다.
arr1 = ['1차원'];
arr1.push(['2차원'])
let arr5 = [...arr1];
console.log(arr1, arr5);
arr1.push('복사가 잘 일어난 것처럼 보이지만..')
console.log(arr1, arr5);
arr1[1].push('중첩된 참조자료형은 복사가 되지 않았습니다.');
console.log(arr1);
console.log(arr5);

// ! JavaScript에서는 완벽한 복사(깊은 복사)를 구현하기 어렵습니다.
// 재귀, JSON.stringify()등의 방법이 있지만, 완벽하다고 보기 어렵습니다.
// 그러나 필요하다면 lodash나 ramda같은 외부 라이브러리를 사용할 수는 있습니다.