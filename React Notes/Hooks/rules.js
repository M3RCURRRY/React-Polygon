import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setVaue] = useState(0);

  // Conditional statement error
  if (true) {
    const [value1, setValue1] = useState(1);
  }

  // Loop error
  for (let i = 0; i < 1; i++) {
    const [valueFor, setValueFor] = useState(i);
  }

  // Function error
  function foo() {
    const [valueFoo, setValueFoo] = useState(2);
  }

  return <div></div>;
}
