# 단어를 아는 것과 기술을 이해한 것은 완전 다르다!

## 영화 추천 페이지 구현
props로 넘어가는 객체 이름을 제대로 안 적어서 onclick이 제대로 작동하지 않는 에러를 만남.

하루종일 우리르 괴롭혔던 에러가 props로 넘긴 객체 데이터에 배열이 섞인 걸 미처 확인하지 못 해서 생긴 걸 뒤늦게 깨달음.
에러 메시지를 제대로 보자.

## 리액트는 무엇인가?
기본 웹 개발 방식은 뼈대가 되는 HTML을 작성하고 CSS로 뼈대를 꾸며주고 JS로 움직이는 기능을 만든다.
3개의 파일을 오가며 길게 작성된 html 코드에서 기능이 구현된 부분을 찾아 코드를 수정하거나 작성했다.
기능이나 분류에 따라 HTML 페이지가 추가로 나뉘게 되면 CSS, JS 파일도 추가로 만들어줘야 했다.

리액트는 자체 컴파일러를 이용해 JSX라는 파일을 사용한다. JSX에서는 JS 문법과 HTML 코드를 함께 작성할 수 있다.
또 기능 별로 컴포넌트를 나눠 JSX를 작성해 기존에는 한 HTML 파일 안에 작성된 기능을 찾아야 하는 어려움이 줄어들었다.

기존에 querySelector로 요소를 선택하고 addEventListener 같은 DOM API로 유저의 액션과 변하는 UI 정보를 매번 체크하는 다소 긴 JS 코드를 써서 관리했는데

각종 HOOK을 사용해 보다 간편하게 이벤트와 변하는 정보를 관리할 수 있다.
대표적으로 state라는 상태라 불리는 변수를 사용한다. 상태가 변하는지 매번 체크해 변한 부분만 매끄럽게 렌더링한다.
effectHook은 

## JS V8엔진과 이벤트 루프
```javascript
function third () {
  throw new Error;
}
function sec () {
  third();
  console.log('sec')
}
function fir () {
  sec();
  console.log('fir')
}
fir();
// 자바스크립트 함수는 스택에 쌓였다가 LIFO 순으로 실행
function sec () {
  console.log('sec')
}
function fir () {
  sec();
  console.log('fir')
}
fir();
```

타이머 같은 비동기 함수, 콜백 함수는 스택이 아니라 콜백 큐에 넣었다가 스택이 비워진 뒤 이벤트 루프가 실행



### 추가 공부해야할 것
AJAX와 리액트의 차이점은 무엇인가?



