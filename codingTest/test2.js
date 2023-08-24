let arr = [49, 12, 100, 276, 33];

function solution(arr, n) {
  if (arr.length % 2 == 0) {
    for (let i = 0; i < arr.length; i += 2) {
      arr[i] += n;
    }
  } else {
    for (let i = 1; i < arr.length; i += 2) {
      arr[i] += n;
    }
  }
  let answer = arr;
  console.log(answer);
}




let num_list = [3, 4, 5, 2, 1]

function solution(num_list) {
  let even = num_list.filter((el) => {
      return el % 2 == 0
  })
  let odd = num_list.filter((el) => {
      return el % 2 !== 0
  })
  even = parseInt(even.join(''))
  odd = parseInt(odd.join(''))
  
  let answer = even + odd;
  console.log(answer);
}


// let num_list2 = num_list.slice()
// let num_list3 = num_list
// num_list.push(0)
// console.log(num_list2)
// // slice로 복사를 한 곳은 메모리 주소가 달라서 0이 없는 배열 그대로
// console.log(num_list3)
// // 참조형이라 메모리 주소가 같아서 0이 추가된 배열 출력

let tempArr = [1, 1, 2, 2, 3, 3];
let tempSet = new Set(tempArr);
let tempArr2 = [...tempSet]
console.log('tempArr2',tempArr2)