import React, { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('TEXT'); // 첫번째 원소는 현재 상태이고 두번째 원소는 상태를 바꿔주는 원소이다. useState(기본값)
    const onClickEnter = () => setMessage('Hello!');
    const onClickLeave = () => setMessage('Good Bye!');

    const [color, setColor ] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>RED</button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>GREEN</button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>BLUE</button>
        </div>
    );
};
export default Say;