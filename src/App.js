import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {

  
    return ( 
    <div>
      <ScrollBox ref={(ref) => this.scrollBox=ref} />
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    </div>
    );
  }
}

export default App;