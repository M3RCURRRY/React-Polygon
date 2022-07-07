import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.css";

function Card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

class Parent extends React.Component {
  render() {
    const btncolor = "red";
    return (
      <div>
        {React.Children.map(this.props.children, (child, i) => {
          return React.cloneElement(
            child,
            { title: `Title${i + 1}`, content: `Content${i + 1}` },
            null
          );
        })}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Parent>
        <Card />
        <Card />
      </Parent>
    );
  }
}

export default App;