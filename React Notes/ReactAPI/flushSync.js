import React, { useState } from "react";
import { flushSync } from "react-dom";
import "./styles.css";

function Foo() {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(true);

  function handleClick() {
    flushSync(() => {
      setCount((c) => c + 1);
    });

    flushSync(() => {
      setFlag((f) => !f);
    });
  }

  console.log("rerender");

  return (
    <>
      <button onClick={handleClick}>Change counter value</button>
      <h1>
        {flag ? "Odd" : "Even"} {count}
      </h1>
    </>
  );
}

export function App() {
  return (
    <div>
      <Foo />
    </div>
  );
}

export default App;
