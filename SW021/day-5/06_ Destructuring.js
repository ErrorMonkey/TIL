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

function whois({ displayName: displayName, fullName: { firstName: name } }) {
  console.log(displayName + " is " + name);
}

let user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

console.log(whois(user));
