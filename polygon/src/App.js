import "./App.css";
import React from "react";

const userName = "John";
const plainText = "SampleText";
const parElement = <p>Text : {plainText}</p>;

const childElement = <p>Child paragraph</p>;
const parentElement = <div>{childElement}</div>;

const compiledLikeElement = React.createElement(
  'h2',
  null,
  'Compiled-like by Babel Element'
);

function App() {
  return (
    <div className="App">
      <h1>Hello, {userName}!</h1>
      {parElement}
      <div>{parentElement}</div>
      {compiledLikeElement}
    </div>
  );
}

export default App;
