# truthy, falsy

에러와 실패를 싫어하는 유연한 자바스크립트는 연산할 때 형변환을 한다.
```javascript
return 1 + '1'
// '11' 반환
```
문자열을 합칠 때도 사용하는 <code>+</code> 연산자는 숫자와 문자열을 합치라고 하면 모두 문자열로 형변환을 해 합친다.  
왜냐면 모든 문자열은 숫자로 형변환할 수 없지만, 모든 숫자는 문자열로 형변환이 가능하기 때문이다.
그래서 <code>+</code> 연산자는 숫자를 문자열로 형변환을 한다.

<code>- * /</code> 다른 수학 연산자는 

```javascript
4 - '1' // 3
1 * '2' // 2
2 / '1' // 2
'hello' - 'ello' // NaN
```

비어있는 값은 보통 false

<code>' '</code>: 공백이 있음, <code>[]</code>: 배열이 있음. 뭔가 있는 경우 true로



+ [참고 1](https://velog.io/@cada/자바스크립트에서-0이-true인-이유)  
+ [참고 2](https://brunch.co.kr/@swimjiy/37)