// split과 toString 이해 연습

let test = "개발 공부 중 재밌다"

let result1 = test.split(' ').toString() + '\n'
let result2 = test.split(' ') + '\n'
let result3 = test.toString().split(' ') + '\n'

console.log(result1)
console.log(result2)
console.log(result3)