import React from "react";
import "./styles.css";

export default function App() {
  function enterHandler(e) {
    console.log(e);
    console.log(e.nativeEvent);
  }

  return (
    <div className="App">
      <h1>Event area</h1>
      <div className="area" onPointerEnter={enterHandler} />
    </div>
  );
}