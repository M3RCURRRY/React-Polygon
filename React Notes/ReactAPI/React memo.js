import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.css";

class Child extends React.Component {
  render() {
    console.log("Child rendered");
    return (
      <div>
        <h1>{this.props.constant}</h1>
      </div>
    );
  }
}

const MemoChild = React.memo(function NewChild(props) {
  console.log("MemoChild rendered");
  return <h1>{props.constant}</h1>;
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    };
  }

  updateHandler() {
    this.setState((prev) => ({
      counter: prev.counter + 1
    }));
  }

  refreshHandler() {
    this.setState((prev) => ({
      counter: prev.counter
    }));
  }

  render() {
    return (
      <div>
        <Child constant={this.state.counter} />
        <MemoChild constant={this.state.counter} />
        <button onClick={() => this.updateHandler()}>Update (increment)</button>
        <button onClick={() => this.refreshHandler()}>Refresh</button>
      </div>
    );
  }
}

export default App;