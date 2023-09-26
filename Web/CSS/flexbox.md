# Flexbox

```css
display: flex;
```

display 지정과 함께 flex 기본 속성을 부여한다.

```css
/* 기본값 */
/* flex: <grow(팽창 지수)> <shrink(수축 지수)> <basis(기본 크기)> */
flex: 0 1 auto;
/* flex로 지정 안 하고 아래 속성으로도 지정 가능 */
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
```

[플렉스 연습하기 좋은 개구리 집 보내기](https://flexboxfroggy.com/#ko)
[플렉스 박스 가이드](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

### <code>flex-direction</code>

이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다.  
<code>row</code> 요소들을 텍스트의 방향과 동일하게 정렬합니다.  
<code>row-reverse</code> 요소들을 텍스트의 반대 방향으로 정렬합니다.  
column: 요소들을 위에서 아래로 정렬합니다.  
column-reverse: 요소들을 아래에서 위로 정렬합니다.

### <code>justify-content</code>

이 CSS 속성은 요소들을 가로선 상에서 정렬하며 다음의 값들을 인자로 받는다는 것을 기억하세요.  
flex-start: 요소들을 컨테이너의 왼쪽으로 정렬합니다.  
flex-end: 요소들을 컨테이너의 오른쪽으로 정렬합니다.  
center: 요소들을 컨테이너의 가운데로 정렬합니다.  
space-between: 요소들 사이에 동일한 간격을 둡니다.  
space-around: 요소들 주위에 동일한 간격을 둡니다.

### align-items

이 CSS 속성은 다음의 값들을 인자로 받아 요소들을 세로선 상에서 정렬합니다.  
flex-start: 요소들을 컨테이너의 꼭대기로 정렬합니다.
flex-end: 요소들을 컨테이너의 바닥으로 정렬합니다.
center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
baseline: 요소들을 컨테이너의 시작 위치에 정렬합니다.
stretch: 요소들을 컨테이너에 맞도록 늘립니다.

### flex-direction

이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다.  
row: 요소들을 텍스트의 방향과 동일하게 정렬합니다.  
row-reverse: 요소들을 텍스트의 반대 방향으로 정렬합니다.  
column: 요소들을 위에서 아래로 정렬합니다.  
column-reverse: 요소들을 아래에서 위로 정렬합니다.

### order

속성을 각 요소에 적용할 수 있습니다. order의 기본 값은 0이며, 양수나 음수로 바꿀 수 있습니다.

### align-self

개별 요소에 적용할 수 있는 또 다른 속성입니다. 이 속성은 align-items가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용됩니다.

### flex-flow

flex-direction과 flex-wrap이 자주 같이 사용되기 때문에, flex-flow가 이를 대신할 수 있습니다. 이 속성은 공백문자를 이용하여 두 속성의 값들을 인자로 받습니다.  
예를 들어, 요소들을 가로선 상의 여러줄에 걸쳐 정렬하기 위해 flex-flow: row wrap을 사용할 수 있습니다.

### align-content

align-content를 사용하여 여러 줄 사이의 간격을 지정할 수 있습니다. 이 속성은 다음의 값들을 인자로 받습니다.  
flex-start: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.  
flex-end: 여러 줄들을 컨테이너의 바닥에 정렬합니다.  
center: 여러 줄들을 세로선 상의 가운데에 정렬합니다.  
space-between: 여러 줄들 사이에 동일한 간격을 둡니다.  
space-around: 여러 줄들 주위에 동일한 간격을 둡니다.  
stretch: 여러 줄들을 컨테이너에 맞도록 늘립니다.  
이 속성을 사용하는 방법이 어려울 수 있습니다.

align-content는 여러 줄들 사이의 간격을 지정하며, align-items는 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 지정합니다. 한 줄만 있는 경우, align-content는 효과를 보이지 않습니다.

### flex-grow

정수를 사용하며 숫자 만큼 남은 여백에 비례해서 크기를 차지한다.
