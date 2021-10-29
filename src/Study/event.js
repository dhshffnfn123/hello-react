import React, { Component } from "react";

class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    }

    /* constructor(props) { // 화살표 함수 형태로 메서드를 정의하여 더 깔끔하게 코드를 짤 수 있다.
        super(props);
        this.handleChange = this. handleChange.bind(this);
        this.handleClick = this. handleClick.bind(this);
    } */

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // 객체 안에서 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용된다.
        });
    }

    handleClick = () => {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                 type="text"
                 name="username"
                 placeholder="사용자 명"
                 value={this.state.username}// input에 작성한 값이 출력된다.
                 onChange={this.handleChange}
                />
                <input
                 type="text"
                 name="message"
                 placeholder="아무거나 입력하세요"
                 value={this.state.message}// input에 작성한 값이 출력된다.
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>confirm</button>
            </div>
        );
    }
}

export default EventPractice;