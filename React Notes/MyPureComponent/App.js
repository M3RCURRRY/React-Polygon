import React, { useState } from "react";

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
      counter: 0
    };
  }

  counterHandler() {
    this.setState((prev) => ({
      counter: prev.counter + 1
    }));
  }

  noChangeHandler() {
    console.log(this.props);
    this.setState((prev) => ({
      counter: prev.counter
    }));
  }

  render() {
    console.log("Render");
    return (
      <div>
        <p>{this.props.d1}</p>
        <p>{this.props.d2.dep}</p>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.counterHandler()}>
          Update with changes
        </button>
        <button onClick={() => this.noChangeHandler()}>
          Update state without changes
        </button>
      </div>
    );
  }
}

export default function App() {
  const [isPrimChanged, setPrimChanged] = useState(false);
  const [isObjectChanged, setObjectChanged] = useState(false);

  function primChangeHandler() {
    setPrimChanged(!isPrimChanged);
  }

  function objectChangeHandler() {
    setObjectChanged(!isObjectChanged);
  }

  return (
    <div>
      <button onClick={primChangeHandler}>Change primitive prop</button>
      <button onClick={objectChangeHandler}>Change object prop</button>
      <Test
        d1={isPrimChanged ? "Changed" : "Unchanged"}
        d2={
          isObjectChanged
            ? { dep: "ObjectChanged" }
            : { dep: "ObjectUnchanged" }
        }
      />
    </div>
  );
}
