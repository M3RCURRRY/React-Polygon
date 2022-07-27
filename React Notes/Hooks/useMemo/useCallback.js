import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";

// Ну типо))))
/*
const greeting = (text) => {
  console.log(text);
};
*/

export default function App() {
  const [message, setMessage] = useState("Hello, World!");
  const [counter, setCounter] = useState(0);

  // Ёбнуться, ререндер
  /*
  const greeting = (text) => {
    console.log(text);
  };
  */

  const greeting = useCallback((text) => console.log(text), []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => setCounter(counter + 1)}>
        Pressed {counter} times
      </button>
    </div>
  );
}
