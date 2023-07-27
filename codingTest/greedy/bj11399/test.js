const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let h = input[0];
let t = Number(input[1].split[' ']);
let tt = 0;

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i ++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
}

insertionSort(t);

for (let i = 0; i < h; i++) {
  for (let j = 0; j <= i; j++) {
    tt += t[j];
  }
}

console.log(tt);