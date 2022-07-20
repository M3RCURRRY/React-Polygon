import React, { useState } from "react";
import { flushSync } from "react-dom";
import "./styles.css";

function FlushTest(props) {
  const [counter, setCounter] = useState(1);
  const [parity, setParity] = useState("Odd");

  const incrementHandler = () => {
    setTimeout(() => {
      flushSync(() => setCounter(counter + 1));
    }, 1000);

    flushSync(() =>
      setTimeout(() => setParity(counter % 2 ? "Even" : "Odd"), 1000)
    );
  };

  console.log("Rerender");

  return (
    <div>
      <h2>Counter</h2>
      <p>Number : {counter}</p>
      <p>Parity : {parity}</p>
      <button onClick={incrementHandler}>Increment number</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <FlushTest />
    </div>
  );
}
