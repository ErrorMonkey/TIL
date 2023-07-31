# 정렬 알고리즘 정리

## 버블 알고리즘

## 선택 알고리즘

## 삽입 정렬 알고리즘

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        brek;
      }
    }
  }
}
```

## 분할 합병 알고리즘
분할 정복 알고리즘
시간 복잡도: NlogN
최대한 작아질 때까지 반갈죽하는 알고리즘이라.. 좀 멋있는 듯.

## 자바스크립트 정렬 라이브러리

#### sort() 함수를 활용한 정렬 
매개변수 2개 a, b를 입력 받아 a - b 반환  
1. 반환 값이 0보다 작은 경우 a를 b보다 앞에 위치  
1. 반환 값이 0보다 큰 경우 b를 a보다 앞에 위치  
1. 반환 값이 0인 경우 a와 b의 순서를 변경하지 않는다  

```javascript
// 오름차순 코드 예시
let arr = [5,2,1,3,4]
function compare(a, b) {
  if (a < b) return -1
  else if (a > b) return 1
  else return 0
}
arr.sort(compare)
console.log(arr)
// 실행결과 [1,2,3,4,5,]
```
```javascript
// 비교 함수를 한 줄에 정의
let arr = [5,2,1,3,4]
arr.sort(function compare(a, b) {
  return a - b;
})
console.log(arr)
// 실행결과 [1,2,3,4,5,]
```
```javascript
// 내림차순 코드 예시
let arr = [5,2,1,3,4]
arr.sort(function compare(a, b) {
  return b - a;
})
console.log(arr)
// 실행결과 [1,2,3,4,5,]
```

#### sort() 문자열 정렬
- 별도로 비교 함수를 사용하지 않으면 유니코드 순으로 오름차순 정렬을 한다. 
```javascript
// 오름차순 정렬 예시
let arr = ["carrot", "banana", "durian", "apple"]
arr.sort()
console.log(arr)
// 실행결과 ['apple', 'banana', 'carrot', 'durian']
```
```javascript
// 내림차순 정렬 예시
let arr = ["carrot", "banana", "durian", "apple"]
function compare(a, b) {
  if (a > b) return -1
  else if (a < b) return 1
  else if return 0
}
arr.sort(compare)
console.log(arr)
// 실행결과 ['durian', 'carrot', 'banana', 'apple']
```