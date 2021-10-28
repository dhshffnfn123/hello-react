import React from "react";
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
        <div>
            hello, my name is {name}. <br />
            children의 값은 {children} 입니다.
            <br />
            My favorite number is {favoriteNumber}.
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'BASIC NAME'
};

MyComponent.propTypes = {
    name: PropTypes.string,  // name값은 무조건 string으로 전달해야함
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;

/*  클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정하는 방법
import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const { name, favoriteNumber, children } = this.props; // 비구조화 할당
        return (...);
    }
}



*/