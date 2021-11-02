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
> + 🛠 arr.map(callback, [this.arg])
>   + callback : 새로운 배열의 요소를 생성하는 함수
>       + currentValue : 현재 처리하고 있는 요소
>       + index : 현재 처리하고 있는 요소의 index 값
>       + array : 현재 처리하고 있는 원본 배열
>   + thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스

## Key
> + 어떤 원소에 변동이 있었는지 알아내려고 사용한다.
> - key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정한다.
> * key 값은 언제나 유일해야 한다.

## filter
> - 🛠 const numbers = [1, 2, 3, 4, 5, 6];
>   - const biggerThanThree = numbers.filter(number => number > 3);
> + 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류할 수 있다.

## LifeCycle
> + 라이프사이클 메서드의 종류는 총 9가지이다.
> - Will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행되는 메서드이고, 
> + Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후에 실행되는 메서드이다.
> - 라이프 사이클은 총 세가지, 즉 마운트, 업데이트, 언마운트 카테고리로 나눈다.

## Mount
> + DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 한다. 이 때 호출하는 메서드는 다음과 같다
>   + constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드입니다.
>   + getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메서드입니다.
>   + render : 우리가 준비한 UI를 렌더링하는 메서드입니다.
>   + componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드 입니다.

## Update
> + 컴포넌트는 다음과 같은 총 네 가지 경우에 업데이트합니다.
>   + props가 바뀔 때
>   + state가 바뀔 때
>   + 부모 컴포넌트가 리렌더링 될 때
>   + this.forceUpdate로 강제로 렌더링을 트리거할 때
> - 업데이트를 발생시키는 요인 -> getDerivedStateFromProps -> shouldComponentUpdate(true반환 시 render 호출, false 반환 시 여기서 작업 취소)
>   - getDerivedStateFromProps : 이 메서드는 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출된다. 
>       - props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용
>   - shouldComponentUpdate : 컴포넌트가 리렌더링을 할지 말지 결정하는 메서드이며 true 혹은 false 값을 반환해야 한다. false를 반환하면 작업을 중지
>       - 만약 특정 함수에서 this.forceUpdate() 함수를 호출하면 이 과정을 생략하고 render 함수를 호출한다.
>   - render : 컴포넌트를 리렌더링
>   - getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
>   - componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

## Unmount
> + 마운트의 반대과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 한다.
>   + 언마운트하기 -> componentWillUnmount
>       + componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드

## render()
> + 🛠 render() { ... }
>   + 이 메서드 안에서 this.props와 this.state에 접근할 수 있으며, 리액트 요소를 반환한다.
>   + 아무것도 보여주고 싶지 않다며 null이나 false를 반환한다.
>   + 이벤트 설정이 아닌 곳에서 setState를 사용하면 안되며, 브라우저의 DOM에 접근해서도 안된다.
>   + DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야 한다.

## constructor
> + 🛠 constructor(props) { ... }
>   + 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행된다.
>   + 초기 state를 설정할 수 있다.

## getDerivedStateFromProps
> + 🛠 필기.txt 참고
>   + props로 받아온 값을 state에 동기화 시키는 용도로 사용한다.
>   + 컴포넌트가 마운트 될 때와 업데이트될 때 호출된다.

## componentDidMount
> + 🛠 componentDidMount() { ... }
>   + 컴포넌트를 다 만들고, 첫 렌더링을 다 마친 후 실행한다.
>   + 다른 자바 스크립트 라이브러리 또는 프레임 워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 된다.

## shouldComponentUpdate
> + 🛠 shouldComponentUpdate(nextProps, nextState) { ... }
>   + props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드이다.
>   + 반드시 true | false 값을 반환해야 한다.
>   + 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 true 값을 반환한다. (false라면 작업을 중지한다.)
>   + 이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설정될 props와 state는 nextProps와 nextState로 접근한다.

## getSnapshotBeforeUpdate
> + 🛠 필기.txt 참고
>   + render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다.
>   + 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용된다.(ex 스크롤바 위치 유지)

## componentDidUpdate
> + 🛠 componentDidUpdate(prevProps, prevState, snapshot) { ... }
>   + 리렌더링을 완료한 후 실행한다.
>   + prevProps와 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근이 가능하다.
>   + getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있다.

## componentWillUnmount
> + 🛠 componentWillUnmount() {...}
>   + 컴포넌트를 DOM에서 제거할 때 실행한다.

## componentDidCatch
> + 🛠 필기.txt 참고
>   + 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지않고 오류 UI를 보여 줄 수 있게 해준다.
>   + error파라미터는 어떤 에러가 발생했는지 알려준다.
>   + info 파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 준다.
>   + 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있다.

