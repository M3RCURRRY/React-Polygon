import React from "react";

class MyPureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Something changed!");

    // Props compare
    if (nextProps.length !== this.props.length) {
      console.log("Props length is not equal! Rerender!");
      return true;
    }

    for (let index in nextProps) {
      if (nextProps[index] !== this.props[index]) {
        console.log("Props keys are not equal! Rerender!");
        return true;
      }
    }

    //State compare
    if (Object.keys(nextState).length !== Object.keys(this.state).length) {
      console.log("State length is not equal! Rerender!");
      return true;
    }

    for (let index of Object.keys(this.state)) {
      if (nextState[index] !== this.state[index]) {
        console.log("State keys are not equal! Rerender!");
        return true;
      }
    }

    return false;
  }
}

class Test extends MyPureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  counterHandler() {
    this.setState((prev) => ({
      counter: prev.counter + 1
    }));
  }

  noChangeHandler() {
    this.setState((prev) => ({
      counter: prev.counter
    }));
  }

  render() {
    console.log("Render");
    return (
      <div>
        <p>{this.props.dep1}</p>
        <p>{this.props.dep2.dep}</p>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.counterHandler()}>Increment</button>
        <button onClick={() => this.noChangeHandler()}>
          Update state without changes
        </button>
      </div>
    );
  }
}

export default function App() {
  let dep1 = "Number";
  let dep2 = {
    dep: "Object"
  };

  function buttonHandler() {
    dep1 = "String";
    dep2 = {
      dep: "NewObject"
    };
  }

  return (
    <div>
      <button onClick={buttonHandler}>Change props</button>
      <Test dep1={dep1} dep2={dep2} />
    </div>
  );
}
