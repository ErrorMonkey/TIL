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

