function Person(name) {
  let name2 = "kimkim";
  this.name = name;
  this.error = 0;
  this.coding = () => {
    this.error++;
    console.log(`${name2}이 에러를 ${this.error}개 만들었다.`);
  };
}

// 일반함수의 this는 호출된 위치에서 실행되니까,
// this.name이 가르키는 this가 Perosn 생성자를 호출한 요소가 되는 걸까?
// 객체 생성자 함수는 화살표 함수로 쓸 수 없는 건가?
// 객체 내에서 선언된 변수
// 객체를 만들 때 선언한 변수?...

const kimcoder = new Person("kimcoder");

kimcoder.coding();
console.log(kimcoder.name);
console.log(kimcoder.name2);

//
var tester1 = {
  "first-name": "Ung-mo",
  "last-name": "Lee",
  test1: "test1",
  gender: "male",
  1: 10,
};

console.log(tester1[1]);
// console.log(tester1.1)
// 첫 글자가 숫자면 -와 마찬가지로 연산식으로 인식해서 접근 불가능
// 얘는 왜 에러 뜸?...

// 순서가 보장되지 않는다고 했는데, 같은 순서가 반복되는 건 왜일까?
for (let prop in tester1) {
  console.log(prop + ": " + tester1[prop]);
}
for (let prop in tester1) {
  console.log(prop + ": " + tester1[prop]);
}
for (let prop in tester1) {
  console.log(prop + ": " + tester1[prop]);
}

let tester1map = { ...tester1 };
console.log("tester1map", tester1map);

//
var array = ["one", "two"];
array.name = "my array";
console.log("array", array);

// index로 접근 가능한 것만 보여준다
array.map((el) => {
  console.log(el);
});
