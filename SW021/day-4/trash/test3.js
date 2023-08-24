function getType(anything) {
  let type = typeof anything;
  if (anything === undefined) {
    return 'undefined'
  } else if (anything === null) {
    return 'null'
  } else if (Array.isArray(anything) === true) {
    return 'array'
    // console.log(result = 'array')
  } else {
    return type
  }
}

function getType(anything) {
  let type = typeof anything;
  if (anything === null) {
    return 'null'
  } else if (anything === undefined) {
    return 'undefined'
  } else if (Array.isArray(anything) === true) {
    return 'array'
    // console.log(result = 'array')
  } else {
    return type
  }
}


// let arr = [0,1,2]
// console.log(Array.isArray(arr))
// console.log(getType(0))
// console.log(getType(null))

// console.log(arr[3])
// function getLastElement(arr) {
//   let n = arr.length;
//   console.log(arr[n-1])
// }

// getLastElement(arr)


function getLongestWord(str) {
  let arr = str.split(' ');
  if (arr.length == 1) {
    return arr[0];
  }
  let big = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if(big.length < arr[i].length) {
        big = arr[i];
      }
  }
  console.log(big);
}



let arr = [4,5,6,7,8,9]

function getElementsAfter(arr, n) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = arr.slice(n, arr.length)
  console.log(answer)
}

function getElementsUpTo(arr, n) {
  let answer = arr.slice(0, n)
  console.log(answer)
}

function getAllElementsButFirst(arr) {
  arr = arr.slice(1, arr.length)
  console.log(arr)
}

// map은 받은 함수를 모두 콜백 함수에 넣은 뒤 결과 값을 다시 배열로 리턴한다
let result1 = arr.map(function (el) {return el * 2});
let resultArrow1 = arr.map((el) => {return el * 2})
let resultArrow2 = arr.map((el) => el * 2)
console.log(result1)
console.log(resultArrow1)
console.log(resultArrow2)
// filter는 조건에 맞는 요소만 배열로 리턴한다
let result2 = arr.filter(function(el) {return el % 2 === 0})
console.log(result2)

// 화살표 함수


let arrFilter = [1,2,3,4]

function removeElement(arr, discarder) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = arr.filter(function (el) {
    if (el !== discarder) {
      return el
    }
  })
  console.log(answer)
}

function removeElement(arr, discarder) {
  // TODO: 여기에 코드를 작성합니다.
  let answer = arr.filter(function (el) {
    if (el !== discarder) {
      return true;
    }
    return false;
  });
  return answer
}



function getIndex(arr, num) {
  let test = arr.filter(function (el) {
    return el < num;
  }).length;
  console.log(test)
  console.log(arr)
}


let getIndexArr = [32, 12, 61, 13, 52]
getIndex(getIndexArr, 9)

