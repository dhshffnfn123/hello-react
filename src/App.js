import React, { Fragment } from 'react'; // react를 불러와서 사용할 수 있게 해줌

function App() { // app 이라는 컴포넌트를 만들어줌 JSX라고 부름

  const name = 'react';
  const number = 0;
  const good = undefined; // return값에 undefined만 반환한다면 오류가 발생한다.  return good || 'good!'과 같이 해주면 해결된다. (JSX 내부는 가능)

  return (
    <>
      <h1>Hello React</h1>
      <h2>is good? How are you? 한글은 잘 나오나?</h2>
      <h2>nice {name}</h2>

      <hr></hr>

      {name === 'react' ? (     // if문을 사용할 수 없지만 삼항 연산자를 사용할 수 있다.
        <h1>this is react :D</h1>
      ) : (
        <h1>this is not react :(</h1>
      )}
      {name === 'reactor' ? <h2>React for AND</h2> : null} {/* null을 렌더링해도 되지만 아래와 같이 더 짧게 사용할 수 있다 */}
      {name === 'react1' && <h2>React for AND</h2>}
      
      {number && <div>ZERO</div> } {/* 0이 출력된다. */}
      
      
    </>
  );
}

export default App;


// Fragment라는 기능을 이용하면 굳이 부모요소를 만들지 않아도 된다. <Fragment>는 <>로도 간단하게 사용할 수 있다
// const와 let : var의 결점을 보완한 변수
