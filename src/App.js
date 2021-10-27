import React, { Fragment } from 'react'; // react를 불러와서 사용할 수 있게 해줌
import './App.css';

function App() { // app 이라는 컴포넌트를 만들어줌 JSX라고 부름

  const name = 'React';
  const number = 0;
  const good = undefined; // return값에 undefined만 반환한다면 오류가 발생한다.  return good || 'good!'과 같이 해주면 해결된다. (JSX 내부는 가능)
  const style = {margin:'auto', textAlign:'center', width:'500px', backgroundColor:'cornflowerblue', color:'white', fontSize:'30px',fontWeight:'bold'} // Camel 표기법을 사용한다.

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
      
      {number && <h1>ZERO</h1> } {/* 0이 출력된다. */}
      
      {good || <h2>good is undefined?</h2>} {/* 값이 undefined 나타난다. */}

      <div style={style}>{name}</div> {/* 미리 선언한 스타일을 적용 */}
      <div style={{marginTop:'20px', backgroundColor:'seagreen', margin:'auto', textAlign:'center', width:'500px', color:'white', fontSize:'30px',fontWeight:'bold'}}>{name}</div> 
      {/* 미리 선언하지 않고 스타일을 적용 */}

      <div className="react">React className</div>  {/* class로 해도 적용은 되지만 콘솔에 경고창이 뜨고 자동으로 변환해준다. */}

      <input></input> <br></br>{/* input과 br은 태그를 닫아주어야 한다. */}
      <input /> <br /> {/* 태그 사이에 별도의 내용이 들어가지 않으면 다음과 같이 셀프 클로징을 할 수 있다 */}
      
    </>
  );
}

export default App;


// Fragment라는 기능을 이용하면 굳이 부모요소를 만들지 않아도 된다. <Fragment>는 <>로도 간단하게 사용할 수 있다
// const와 let : var의 결점을 보완한 변수
