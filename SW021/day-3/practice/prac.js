// function checkAge (age) {
//   if (age < 8) return '미취학 아동입니다.'
//   else if (age < 14) return '초등학생입니다.'
//   else if (age < 17) return '중학생입니다.'
//   else if (age < 20) return '고등학생입니다.'
//   else return '성인입니다.'
// }

// let result = checkAge(17);
// console.log(result);

// function foo () {
//   return 1 + 2;
// }
// result = foo()
// console.log(result);



// let num = 3;
// num += num;
// console.log(num);

// console.log(Boolean(-1))

// function test(word1, word2) {
//   let result = 0;
//   result = Math.floor((word1.length + word2.length) / 2);
//   console.log(result);
//   return result;
// }



// const arr = [[1, 2], [undefined, 4, '5'], [9, 'hello']];

// function sumOfArraysInArray(arr) {
//   let answer = 0;
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//       arr = Number(arr[i][j]);
//       console.log(arr);
//       if (isNaN(arr[i][j]) == false) answer += arr[i][j];
//     }
//   }
//   console.log(answer);
// }

// sumOfArraysInArray(arr)

// function makeDigits(num) {
//   let answer = '';
//   for (let i = 0; i < num + 1; i++) {
//    answer = answer + i;
//   }
//   console.log(answer);
//   return answer;
// }

// makeDigits(5)

// function makeMultiplesOfDigit(num) {
//   let answer = ''
//   for(let i = 0; i <= num; i++) {
//     if (i % 3 == 0) answer += i;
//   }
//   return answer;
//   console.log(answer);
// }

// makeMultiplesOfDigit(9);

// function getMaxNumberFromString(str) {
//   let max = str[i];
//   let temp = '';
//   for (i = 0; i < str.length; i++) {
//     if (str[i] < str[i + 1]) {
//       max = str[i + 1]
//     }
//   }
//   return max
// }

function replaceAll(str, from, to) {
  for(let i = 0; i < str.length; i++) {
    if (str[i] == from) {
      // console.log(str[i]);
      // str.slice(i, i + 1);
      // str[i] = to;
      // console.log(str[i]);
      str = str.replace(from, to)
    }
  }
  console.log(str);
}

replaceAll('hello', 'l', 'k');