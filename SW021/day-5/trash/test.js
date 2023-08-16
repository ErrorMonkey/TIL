let myCat = {
  이름: "괭",
  나이: "3",
  보유장난감: "쥐인형",
  손: function () {
    return `고양이 ${이름}가 손을 내밉니다.`
  }
}

console.log(myCat.이름);
console.log(myCat["이름"]);

// 프로퍼티 추가
myCat.성별 = "남";
myCat["성별"] = "남";

let newCat = {};
newCat["이름"] = myCat[""];

// 프로퍼티를 삭제하는 방법
delete myCat.성별;

// 프로퍼티 유무 확인
console.log("나이" in myCat) // true
console.log("개월" in myCat) // false


// 객체 내부 
// myCat.보유장난감.push("낚시 장난감");

// 객체의 키를 모아 배열로 만드는 메서드
console.log(Object.keys(myCat));
// 객체의 값을 모아 배열로 만드는 메서드
console.log(Object.values(myCat));

// 객체를 합치거나 복사할 수 있는 메서드 Object.assign()
let user = { name: "kim", job: "student" };
let info = { name: "kim", job: "engineer", age: 25 };
let userInfo = Object.assign(user, info);
// {name: 'kim', job: 'engineer', age: 25}
// key가 중복되면 뒤에 있는 key가 덮어 씌운다

let myOtherCat = Object.assign({}, myCat);
myOtherCat.이름 = "냥";
myOtherCat.나이 = "1";
console.log(myOtherCat);

// 두 객체가 같은지 비교
// ! 메모리 주소를 체크하는 건지? 객체 내의 정보를 체크하는 건지?
console.log(Object.is(myCat, myOtherCat));

// 객체를 for 반복문을 사용할 때는 for in을 사용한다
for (let property in object) {
  if (Object.hasOwnProperty.call(object, property)) {
    const element = object[property];
  }
}




// 중첩된 참조 자료형은 복사가 되지 않습니다.
// 얕은 복사라고 부릅니다.
