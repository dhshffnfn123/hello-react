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