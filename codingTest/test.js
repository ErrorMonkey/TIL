let arr = [50, 20, 40, 25, 35, 30]


let n = arr.indexOf(Math.max(...arr)) // 값의 인덱스를 반환
arr.at(n) // 넣은 변수를 인덱스로 갖는 값을 찾아 반환함
console.log(`arr.includes(arr.at(n)): ${arr.includes(arr.at(n))}`) // 값이 있으면 true를 반환
arr.splice(n, 1) // 배열에서 인덱스부터 1개 직접 삭제
arr.sort((a, b) => b - a)

arr = arr.filter((el) => el > 30) // true인 요소만 모아 배열로 반환
arr = arr.map((el) => {
  return parseInt(el / 2).toString()
}) // 요소를 모두 콜백 함수에 넣은 뒤 모아서 배열로 반환
console.log('filter와 map 메소드: ', `${arr}`)

// 배열을 모두 계산할 때는 for문 말고 reduce!
// 배열을 직접 바꿈
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let testReduce1 = arr2.reduce((acc, cur) => acc += cur)
let testReduce2 = arr2.reduce((acc, cur, idx) => {return acc += cur}, 5)
console.log(arr2.reduce((acc, cur) => acc += cur))
console.log(testReduce1)
console.log(testReduce2)


let arr3 = [1, 2, { id : 3 }, 4, 5];
// .find() 콜백함수 조건에 맞는 첫 번째 요소의 값을 반환
console.log(arr3.find((el) => el > 3))

// indexOf는 객체를 찾으라고 하면 -1 반환, 콜백 함수 안 써도 됨
console.log(arr3.indexOf((el) => el.id === 3))
// findIndex는 객체의 인덱스를 찾아서 반환
let arr3idx = arr3.findIndex((el) => el.id === 3)
console.log('findIndexArr3',arr3idx)

console.log(arr3.map((el) => arr3.indexOf(el)))
// 근데 map으로 돌리면 인덱스를 반환한다?

const data = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
toObj = data.map(([a, b, c, d]) => ({a, b, c, d}))
console.log(toObj[2].c);

let x = 10
function solution(x) {
  let answer = true;
  let arr = x.toString().split('')
  console.log(arr)
  console.log(x)
  
  return answer;
}


goal = ["i", "want", "to", "drink", "water"];
cards1 = ["i", "drink", "water"];

console.log(cards1.indexOf(goal[1]));




func = (x) => {
  return (Math.random(x) * 10) > 5 ? 'more than 5' : 'more than 5';
}



console.log('weekfunc',weekfunc())
weekfunc()
console.log('weekfunc',weekfunc())
weekfunc()
console.log('weekfunc',weekfunc())
weekfunc()
console.log('weekfunc',weekfunc())
weekfunc()
console.log('weekfunc',weekfunc())
weekfunc()
