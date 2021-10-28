/* import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {    // 컴포넌트에 state를 설정할 때는 다음과 같이 constructor 메서드를 작성하여 설정한다.
        super(props);   //constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 한다.
            //state의 초깃값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                 // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정함
                 onClick={() => {
                     //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                     this.setState({ number: number + 1 });
                 }}
                 >
                     + 1
                 </button>
            </div>
        );
    }
}

export default Counter; */




import React, {Component} from "react";

class Counter extends Component {
    state = {       // 이런식으로 간단하게 state의 초깃값을 설정해 줄 수 있다.
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                 // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정함
                 onClick={() => {
                     //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                     this.setState(prevState => {
                         return {
                             number : prevState.number + 1
                         };
                     });
                     // 위 코드와 아래 코드는 완전히 똑같은 기능을 한다.
                     // 아래 코드는 함수에서 바로 객체를 반환한다는 의미이다.
                     this.setState(prevState => ({
                         number: prevState.number + 1
                     }));
                 }}
                 >
                     + 1
                 </button>
            </div>
        );
    }
}

export default Counter;