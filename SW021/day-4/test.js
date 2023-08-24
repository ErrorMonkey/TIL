let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// indexOf()
console.log(arr.indexOf(5));
console.log(arr.indexOf(10));

if (arr.indexOf(10) === -1) {
  console.log("없습니다.");
}



// includes()
console.log(arr.includes(5));
console.log(arr.includes(10));