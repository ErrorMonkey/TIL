# SQLlite

[실습 사이트](https://sqlschool.co.kr/)

#### <code>AS</code> 찾아온 데이터의 컬럼명을 바꾼다

띄어쓰기로도 대체할 수 있음

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

#### <code>WHERE</code> 찾아볼 컬럼, 조건을 걸 수도 있다

#### 논리 연산자 <code>AND, OR, NOT</code>

특이하게도 OR와 AND도 NOT을 만나면 서로 뒤바뀐다.

```sql
WHERE NOT(국가장학금 IS NULL OR 근로장학금 IS NULL);
-- 위 아래 두 코드는 같은 의미
WHERE (국가장학금 IS NOT NULL AND 근로장학금 IS NOT NULL);
```

#### <code>BETWEEN</code> 연속되는 정보 범위 지정

연속적인 값을 찾을 때는 <code>AND</code>를 사용 (<code>OR</code>는 사용 불가능)

```sql
SELECT 학번, 1학년1학기 FROM grade
WHERE 1학년1학기 BETWEEN 3.0 AND 4.0;
```

<code>IN</code> 연속되지 않은 여러 정보를 찾을 때 사용

```sql
SELECT 학번, 이름, 학과 FROM student
WHERE 학과 IN ('물리학과', '화학과', '컴퓨터공학과');
```

#### <code>LIKE</code> 와일드 카드와 함께 사용해서 문자열을 검색한다

<code>\_</code> 글자 1개, <code>%</code> 모든 글자

```sql
WHERE 이름 LIKE '김%' -- 이름이 몇 글자든 김씨 성을 모두 찾음
WHERE 이름 LIKE '%컴퓨터__'
-- 컴퓨터 앞에 어떤 글자가 들어가도 상관 없지만 컴퓨터 이후에는 2글자만 있는 정보를 찾음
```

#### <code>INSERT INTO</code> 기존 행에 정보를 삽입할 때 사용

값이 없는 다른 행은 <code>null</code>이 들어감

```sql
INSERT INTO student (이름, 학과) -- [테이블명] ([컬럼1], ...)
VALUES (김코드, 코드전문학과)-- ([값1], ...)
```

#### <code>LIMIT</code> 불러오는 정보의 양을 제한할 수 있음

```sql
SELECT * FROM student
ORDER BY 마일리지 DESC
LIMIT 10
```

## CRUD

#### <code>CREATE</code>

```sql
CREATE TABLE 제품 ( -- [테이블명](
  -- [컬럼명] [데이터타입] [조건])
  제품번호 INT PRIMARY KEY,
  제품이름 VARCHAR NOT NULL,
  가격 INT DEFAULT 0);
-- CREATE 직후엔 데이터가 없어서 INSERT로 데이터를 넣어줘야 함
INSERT INTO 제품 (제품번호, 제품이름, 가격)
VALUES (1, '개발자 담요', 9000);
```

| 데이터 타입 | 의미 |

#### <code>UPDATE</code> 정보를 수정한다

```sql
UPDATE student -- [테이블명]
SET 이름='이진상', 학과='미디어통합과' -- [컬럼='변경할 값'], ...
WHERE 학번=202100076; -- [조건]
```

#### <code>DELETE</code> 테이블 내의 정보를 지운다

```sql
DELETE FROM student
WHERE 학년=4;
```

#### <code>DROP</code> 테이블을 지운다

```sql
DROP TABLE 제품; -- 테이블명을 적어주면 된다
```

## SQL 내장함수

### 문자열과 관련된 함수

#### <code>DATE, TIME</code>

SQLite에서는 <code>TEXT, REAL, INTEGER</code> 3가지 자료형으로 날짜 및 시간을 표기.
REAL은 실수로 율리우스 기준으로 알려준다.
INTEGER는 세계협정시간으로 알려준다.

```sql
SELECT DATE(); -- 세계협정시간 기준으로 알려줌
SELECT TIME();

SELECT DATE('NOW', 'LOCALTIME'); -- 사용자의 위치 기반으로 알려줌
SELECT TIME('NOW', 'LOCALTIME');
SELECT DATETIME('NOW', 'LOCALTIME');

-- strftime : 시간 표시하는 포맷을 지정할 수 있음 (format, timestring, modifier)
SELECT strftime('%Y-%M-%D %H:%M:%S', 'NOW')
-- DBMS마다 지정된 포맷이 있어서 먼저 확인 필요
```

#### <code>||</code> 정보를 연결해서 컬럼으로 정리하는 연결 연산자

```sql
SELECT 학번 || 이름 || 학과 AS 학생정보 FROM student;
```

#### <code>LOWER, UPPER</code> 소문자, 대문자로 문자열 변환

```sql
SELECT LOWER(교원번호) AS 교원번호 FROM professor;
SELECT UPPER(이메일) AS 이메일 FROM professor;
```

#### <code>SUBSTR</code> 문자열을 잘라내준다

```sql
-- 잘라낼 문자열의 위치와 갯수
SELECT SUBSTR(주소, 1, 7) AS 주소 FROM student;
```

#### <code>REPLACE</code> 문자열을 지정해 대체한다

```sql
-- 원본 데이터, 타깃, 대체할 문자열
SELECT REPLACE('Hello world', 'world', 'SQL');
SELECT 이름, REPLACE(이름, SUBSTR(이름, 2, 2), '**') FROM student;
-- 이름 컬럼의 정보가 모두 성만 남기고 별표 처리 '김**', '이**'
```

#### <code>LENGTH</code> 문자열의 길이를 알려준다.

```sql
SELECT 이름, LENGTH(이름) AS 이름 길이 FROM student;
```

#### <code>COUNT</code> 전체 혹은 컬럼, 행의 개수를 출력한다.

```sql
SELECT COUNT(이름) FROM student;
```

---

### 오라클만 지원하는 문자열 함수

#### <code>INITCAP</code> 첫단어만 대문자로 만들어줌

```sql
SELECT INITCAP('hello world') FROM DUAL; -- Hello World
```

#### <code>INSTR</code> 단어의 순서를 찾는 함수

```sql
SELECT INSTR('개발자', '발'); -- 2
```

---

### 수학과 관련된 함수

#### <code>ROUND</code> 지정한 자릿수만큼 소수를 반올림한다.

```sql
SELECT ROUND(1학년1학기, 1) AS 반올림성적 FROM grade;
-- 소수점 첫째 자리까지 반올림한다
```

#### <code>MAX, MIN</code> 최댓값, 최솟값 구하기

```sql
SELECT 학번, MAX(1학년1학기) AS '1학년 1등' FROM grade;
SELECT 학번, MIN(1학년1학기) AS '1학년 꼴등' FROM grade;
```

#### <code>SUM</code> 숫자 컬럼을 합한다

```sql
SELECT SUM(성적장학금) AS '성적장학금 총액' FROM scholarship;
```

#### <code>AVG</code> 평균값을 구한다

```sql
SELECT AVG(1학년1학기) AS '평균 성적' FROM grade;
```

---

### SQLite는 지원하지 않는 수학 함수

#### <code>MOD</code> 나머지 값을 반환한다.

<code>%</code>로도 같은 결과 값을 가질 수 있다.

```sql
SELECT MOD(12, 5); -- 2
```

#### <code>POWER</code> 타깃을 지정한 숫자만큼 제곱해준다.

```sql
SELECT POWER(3, 2); -- 9
```

#### <code>SQRT</code> 제곱근을 반환한다.

```sql
SELECT SQRT(4); -- 2
```

#### <code>TRUNC</code> 지정한 자릿수만큼 소수를 자른다.

```sql
SELECT TRUNC(10.25, 1); -- 10.2
```

## SQL 조건문

DBMS마다 조건문이 조금씩 다르다.

#### <code>CASE WHEN</code>

```sql
SELECT 학과번호, 과목명, 이수구분 -- 컬럼명
CASE
  WHEN 이수구분 = '전필' THEN '전공 필수과목'
  -- [조건1][결과1]
  ELSE '전공 선택과목' -- [결과2]
END AS '필수 및 선택과목' -- [결과를 나타낼 컬럼명]
FROM subject;

-- 조건을 여러개 건 경우
SELECT 학번, 1학년2학기,
CASE
  WHEN 1학년2학기 = 4.5 THEN '신'
  WHEN 1학년2학기 BETWEEN 4.0 AND 4.49 THEN '교수님의 귀염둥이'
  WHEN 1학년2학기 BETWEEN 3.0 AND 3.99 THEN '일반인'
  ELSE '오락문화의 선구자'
END AS '학점별 분류'
FROM grade;
```

### <code>JOIN</code> 조건에 맞는 다른 테이블의 정보를 가져온다.

다른 테이블이 동일한 컬럼을 가지고 있어야 함. 로우 방향으로 정보를 합침.

```sql
SELECT [컬럼명1], [컬럼명2], ...
FROM [테이블명1]
INNER JOIN [테이블명2] ON [JOIN 조건]
```

```sql
SELECT
  student.이름,
  student.학과,
  student.지도교수,
  professor.연구실
FROM student
JOIN professor ON student.학과 = professor.학과;

-- 여러 테이블에서 정보를 가져올 때
SELECT
  student.학번,
  student.이름 AS 학생이름,
  professor.이름 AS 교수이름,
  professor.이메일 AS 교수이메일,
  scholarship.국가장학금
FROM student
INNER JOIN professor ON student.지도교수 = professor.이름
INNER JOIN scholarship ON student.학번 = scholarship.학번;
-- JOIN을 안 쓰고도 쓴 것과 같은 결과를 받는 법
SELECT
  student.이름,
  student.학과,
  student.지도교수,
  professor.연구실
FROM student, professor
WHERE student.학과 = professor.학과;
```

#### <code>OUTER JOIN</code> 테이블 하나만 조건이 맞아도 가져온다.

```sql
-- LEFT OUTER JOIN 일치하는 항목이 있으면 왼쪽 테이블만 출력
SELECT [컬럼명]
FROM [테이블명1]
LEFT OUTER JOIN [테이블명2] ON [조인 조건]
-- RIGHT OUTER JOIN 일치하는 항목이 있으면 왼쪽 테이블만 출력
SELECT [컬럼명]
FROM [테이블명1]
RIGHT OUTER JOIN [테이블명2] ON [조인 조건]
-- FULL OUTER JOIN 어디나 일치하는 항목이 있으면 출력
SELECT [컬럼명]
FROM [테이블명1]
FULL OUTER JOIN [테이블명2] ON [조인 조건]
```

### <code>UNION</code> 서로 다른 테이블의 정보를 결합한다

컬럼 개수가 일치해야한다. <code>JOIN</code>과 다르게 컬럼방향으로 정보를 합침.  
<code>UNION</code>은 중복을 허용하지 않음. <code>UNION ALL</code>은 중복 가능.

```sql
SELECT 컬럼1, 컬럼2, ...
FROM 테이블1
집합연산자 => UNION, UNION ALL, INTERSECT, MINUS
SELECT 컬럼1, 컬럼2, ...
FROM 테이블2
```

```sql
SELECT 학번 AS 번호, 이름
FROM student
UNION
SELECT 교원번호 AS 번호, 이름
FROM professor;
```

#### <code>GROUP BY</code> 특정 열을 기준으로 그룹화한다.

집계함수와 함께 사용한다. 집계함수에는 평균, 총합, 개수, 최대, 최소

```sql
SELECT 학년, COUNT(학년) AS "학년별 학생 수"
FROM student
WHERE 학년 >= 3
GROUP BY 학년
ORDER BY 학년 DESC;
```

#### <code>HAVING</code> 그룹화된 데이터에 조건을 추가할 때 사용.

```sql
SELECT 학년, COUNT(학년) AS "학년별 학생 수"
FROM student
GROUP BY 학년
HAVING "학생별 학생 수 " < 25;
```
