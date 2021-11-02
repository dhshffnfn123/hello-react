# 🌐React


##### Node.js 및 yarn, VS CODE를 사용

## JSX
### ⚠ JSX를 올바르게 작성하려면 몇 가지 규칙을 준수해야 한다.
> + 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다. 
>    + DOM에서 컴포넌트 변화를 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다.
> * 자바스크립트를 표현할 때는 JSX 내부 {}로 감싸서 사용한다. 
> - JSX 내부에서는 if문 대신 조건부 연산자 (삼항 연산자)를 {}안에 사용할 수 있다.
> + AND 연산자를 사용하여 조건부 렌더링을 할 수 있다. (falsy한 값인 0은 예외적으로 0을 나타낸다.)
> * React에서는 함수에서 undefined만 반환해서는 안된다. 
>    * 값이 undefined일 수도 있다면 OR 연산자를 사용한다. (JSX는 가능하다.)
> - React에서는 DOM요소에 스타일을 적용할 시 객체형태로 넣어주어야 한다. (Camel 표기법을 사용한다.)
> + class대신 className을 사용한다. (class로 해도 적용은 되지만 경고창이 뜨고 자동으로 변환된다.)
> * HTML에서는 input과 br은 닫지 않아도 되지만 JSX는 닫지 않으면 오류가 생긴다. 
>    * <\input /> <\br />과 같이 태그 사이에 내용이 없으면 셀프클로징이 가능하다.
> - 주석은 {/*  */} 이런 형태로 사용이 가능하다.


## 컴포넌트
> + 컴포넌트는 함수형과 클래스형으로 나뉜다

## props
> + props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할때 사용하는 요소이다.
> - 객체에서 값을 추출하는 문법을 비구조화 할당이라고 한다. (MyComponent.js 참고)
> * Prop는 PropTypes를 설정할 수 있다.
>   * (array, arrayOf, bool, func, number, object, string, symbol, node. instanceOf, oneOf, shape, any...)

## State
> + 클래스형 컴포넌트의 state와 함수형 컴포넌트의 state로 나뉜다.
> - 컴포넌트에 state를 설정할 때는 constructor 메서드를 작성하여 설정한다.
> * state 객체 안에는 여러 값이 있을 수 있다.
> + state값을 바꾸어야 할 때는 setState혹은 useState를 통해 전달받은 세터함수를 사용해야 한다.

## Event
> + 이벤트 이름은 카멜 표기법으로 작성한다.
> - 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다.
> * DOM 요소에만 이벤트를 설정할 수 있다.

## DOM_ref
> + DOM을 직접적으로 건드려야 할 때 주로 사용한다.
> - DOM은 특정 input에 포커스를 주거나 스크롤박스 조작, Canvas 요소에 그림을 그릴 때 사용해야 한다.

## map()
> + arr.map(callback, [this.arg])
>   + callback : 새로운 배열의 요소를 생성하는 함수
>       + currentValue : 현재 처리하고 있는 요소
>       + index : 현재 처리하고 있는 요소의 index 값
>       + array : 현재 처리하고 있는 원본 배열
>   + thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스