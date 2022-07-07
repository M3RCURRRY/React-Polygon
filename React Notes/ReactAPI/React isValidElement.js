import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.css";

function A(props) {
  return (
    <div>
      <p>Function</p>
    </div>
  );
}

class B extends React.Component {
  render() {
    return (
      <div>
        <p>Class</p>
      </div>
    );
  }
}

const obj = {};

console.log(React.isValidElement(obj)); // false
console.log(React.isValidElement(A)); // false
console.log(React.isValidElement(B)); // false

const fComp = <A />;
const cComp = <B />;
console.log(React.isValidElement(fComp)); // true
console.log(React.isValidElement(cComp)); // true

export function App() {
  return <div></div>;
}

export default App;