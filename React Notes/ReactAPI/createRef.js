import React, { Suspense, useState } from "react";
import "./styles.css";

class Inside extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  componentDidMount() {
    this.childRef.current.childLog();
  }

  render() {
    return (
      <div>
        <Child ref={this.childRef} />
      </div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  childLog() {
    console.log("Child method called");
  }

  render() {
    return <div>Child</div>;
  }
}

export function App() {
  return (
    <div>
      <Inside />
      <Parent />
    </div>
  );
}

export default App;