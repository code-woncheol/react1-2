# 봉원철 201930217

<<<<<<< HEAD
<details><summary>3월 27일 강의</summary>
    <h2>JSX의 역할</h2>
    jsx는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.<br>
    React가 createElemnet함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.<br>
    만일 JS로 작업할 경우 직접 createElement함수를 사용해야 합니다.<br>
    결국 JSX는 가독성을 높여 주는 역할을 합니다.<br>
    <h3>JSX의 장점</h3>
    코드가 간결해 집니다.<br>
    가독성이 향상 됩니다.<br>
    Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.<br>
    
</details><br>
=======
!!! 다음 주(27일) 오면 해야할 것 : 컴퓨터 변경했기 때문에 vs code 익스텐션 동기화 !!!
>>>>>>> ec31831d13649008d33a356c54b3fdf7c99e6464
<details>
    <summary>3월 20일 강의</summary>
    <h2>1.리액트의 정의</h2><br>
    'The library for web and native user interfaces'<br>
    사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리<br><br>
    <h4>2.다양한 자바스크립트 UI 프레임워크: Stack overflow trends</h4>
    <h4>3.리액트 개념 정리</h4>
    - 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트입니다.
    <br>
    - 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구라고 생각하면 됩니다.
<h2>1.2 리액트의 장점</h2>
<h4>1.빠른 업데이트와 렌더링 속도</h4>
- 이 것을 가능하게 하는 것이 바로 Virual DOM입니다.<br>
- DOM이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스입니다. 이 것은 W3C의 표준입니다.<br>
- Virtaul DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법입니다.<br>
- DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링을 합니다<br>
  
<h4>2.컴포넌트 기반 구조</h4>
- 리액트의 모든 페이지는 컴포넌트로 구성됩니다.<br>
- 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.<br>
- 그래서 리액트로 개발을 하다 보면 레고 블록을 조립나는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다.<br>
- 아래 그림은 에어비앤비 사이트 화면의 컴포넌트 구조 입니다. 재사용성이 뛰어납니다.<br>
<h4>3.메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전함</h4>
<h4>4.활발한 지식 공유와 커뮤니티</h4>
<h4>5.모바일 앱 개발가능</h4>
<h2>1.2 리액트의 단점</h2>
<h4>1.방대한 학습량</h4>
<h4>2.높은 상태 관리 복잡도</h4>

</details><br>
<details>
    <summary>3월 13일 강의</summary>
        <details>
            <summary>HTML 살펴보기</summary>
            &nbsp;&nbsp;&nbsp;&nbsp;1. html이란 무엇인가?<br>
            &nbsp;&nbsp;&nbsp;&nbsp;2. 웹사이트의 뼈대를 구성하는 태그들<br>
            &nbsp;&nbsp;&nbsp;&nbsp;3. SPA(Single Page Application)<br>
            ![](./image/MPAvsSPA.png)
        </details>
        <details>
            <summary>자바스크립트</summary>
            &nbsp;&nbsp;&nbsp;&nbsp;1. 자바스크립트란 무엇인가?<br>
            &nbsp;&nbsp;&nbsp;&nbsp;2. ES6(ECMAScript6) - 표준 ECMA-262<br>
            &nbsp;&nbsp;&nbsp;&nbsp;3. 자바스크립트의 자료형<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● var: 중복 선언 가능, 재할당 가능<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● let: 중복 선언 불가능, 재할당 가능<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● const: 중복 선언 불가능, 재할당 불가능<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Array type: 배열<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● Object type<br>
            &nbsp;&nbsp;&nbsp;&nbsp;4. 자바스크립트의 연산자<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            비교 연산자, 동등 연산자/일치 연산자, 이진 논리 연산자, 삼항 연산자...<br>
            &nbsp;&nbsp;&nbsp;&nbsp;5. 자바스크립트의 함수<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Function statement형: 일반적인 함수의 형태<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Arrow function expression형: 화살표 함수<br>
            
            
            
</details>
        </details>
        
</details></details><br>
<details><summary>3월 7일 강의</summary>

# h1
## h2
### h3
#### h4
##### h5
###### h6

# 리스트
1. 첫 번째
2. 두 번째
3. 세 번째

* 첫 번째
* 두 번째

- 첫 번째
- 두 번째

*이탤릭체*
**볼드**
***이탤릭체&볼드***

개행은  
스페이스 두 개

```js
const a = 1;
let b = 2;
//코드
```

[구글 링크](http://google.com)

[페이지내 h3로 이동](#h3)

---
<details>
<summary><strong>접기</strong>/펼치기</summary>
접기/<strong>펼치기<strong>
<!-- ![](./sibadog.jpg) 이미지 -->
</details>
</details>
