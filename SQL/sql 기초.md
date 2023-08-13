# SQL

[실습 사이트](https://sqlschool.co.kr/)

#### <code>AS</code> 띄어쓰기로도 대체할 수 있음
```sql
SELECT 이름 AS '학생 이름'
-- 위 아래 결과 똑같음
SELECT 이름 '학생 이름'
```
띄어쓰기 없는 단어는 <code>''</code> 안 써도 문자열로 인식 가능
```sql
SELECT 이름 AS '학생이름'
FROM student
-- 위 아래 결과 똑같음
SELECT 이름 AS 학생이름
FROM student
```

#### <code>||</code> 연결 연산자 

#### <code>WHERE</code> 찾아볼 범위, 조건 범위
#### 논리 연산자 <code>AND, OR, NOT</code>
특이하게도 OR와 AND도 NOT을 만나면 서로 뒤바뀐다.
```sql
WHERE NOT(국가장학금 IS NULL OR 근로장학금 IS NULL);
-- 위 아래 두 코드는 같은 의미
WHERE (국가장학금 IS NOT NULL AND 근로장학금 IS NOT NULL);
```

#### <code>BETWEEN</code> 연산자
연속적인 값을 찾을 때는 <code>AND</code>를 사용 (<code>OR</code>는 사용 불가능)
```sql
SELECT 학번, 1학년1학기 FROM grade
WHERE 1학년1학기 BETWEEN 3.0 AND 4.0;
```
<code>IN</code>  
연속되지 않은 여러 정보를 찾을 때 사용
```sql
SELECT 학번, 이름, 학과 FROM student
WHERE 학과 IN ('물리학과', '화학과', '컴퓨터공학과');
```
#### <code>LIKE</code>
와일드 카드와 함께 사용해서 문자열을 검색한다  
<code>_</code> 글자 1개, <code>%</code> 모든 글자
```sql
WHERE 이름 LIKE '김%' -- 이름이 몇 글자든 김씨 성을 모두 찾음
WHERE 이름 LIKE '%컴퓨터__'
-- 컴퓨터 앞에 어떤 글자가 들어가도 상관 없지만 컴퓨터 이후에는 2글자만 있는 정보를 찾음
```

#### <code>INSERT INTO</code>
기존 행에 정보를 삽입할 때 사용.
값이 없는 다른 행은 <code>null</code>이 들어감
```sql
INSERT INTO student (이름, 학과) -- [테이블명] ([컬럼1], ...)
VALUES (김코드, 코드전문학과)-- ([값1], ...)
```

#### <code>UPDATE</code>
```sql
UPDATE student -- [테이블명]
SET 이름='이진상', 학과='미디어통합과' -- [컬럼='변경할 값'], ...
WHERE 학번=202100076; -- [조건]
```

#### <code>DELETE</code>
<code>SELECT</code>의 반대 버전
```sql
DELETE FROM student WHERE 학년=4;
```