import React from "react";

class MyPureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
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
      counter: 0,
      prop1: props.dep1,
      prop2: props.dep2
    };
  }

  counterHandler() {
    this.setState((prev) => ({
      ...prev,
      counter: prev.counter + 1
    }));
  }

  noChangeHandler() {
    this.setState((prev) => ({
      ...prev,
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

  let newDep1 = "String";
  let newDep2 = {
    dep: "NewObject"
  };

  function buttonHandler() {
    dep1 = newDep1;
    dep2 = newDep2;
  }

  return (
    <div>
      <Test dep1={dep1} dep2={dep2} />
      <button onClick={buttonHandler}>Change props</button>
    </div>
  );
}
