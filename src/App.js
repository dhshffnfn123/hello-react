import React, {Component} from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";


//랜덤 색상을 설정한다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16); 
  // 랜덤으로 나온 값을 16진수로 바꿔준다. (16777215를 hex로 표현하면 ffffff가 된다.)
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>랜덤 색상</button>
      <ErrorBoundary> 
      <LifeCycleSample color={this.state.color} />
      </ErrorBoundary>
      </div>
    );
  }
}

export default App;