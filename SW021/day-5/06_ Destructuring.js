// ! 구조분해할당
// ! 배열
const [a, b, ...arr] = [10, 20, 30, 40, 50];
// console.log(a); // ?
// console.log(b); // ?
// console.log(arr); // ?

// ! 객체
const { c, d, ...obj } = { a: 10, b: 20, c: 30, d: 40 };
// console.log(c); // ?
// console.log(d); // ?
// console.log(obj); // ?
const { name, phone, ...obj2 } = {
  name: '사람',
  age: 20,
  phone: '010-0000-0000',
  job: '선비'
};
// console.log(name)

let user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

// function whois({ displayName: displayName, fullName: { firstName: name } }) {
//   console.log(displayName + " is " + name);
// }

function whois({ displayName: dN, fullName: { firstName: n } }) {
  console.log(dN + " is " + n);
  return dN + " is " + n;
}

console.log(whois(user));
