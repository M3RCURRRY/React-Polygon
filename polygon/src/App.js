import React from "react";
import "./App.css";
import SimpleClass from "./components/SimpleClass";
import SimpleFunc from "./components/SimpleFunc";

const userName = "John";
const plainText = "SampleText";
const parElement = <p>Text : {plainText}</p>;

const childElement = <p>Child paragraph</p>;
const parentElement = <div>{childElement}</div>;

const compiledLikeElement = React.createElement(
  "h2",
  null,
  "Compiled-like by Babel Element"
);

function App() {
  return (
    <div className="App">
      <h1>Hello, {userName}!</h1>
      {parElement}
      <div>{parentElement}</div>
      {compiledLikeElement}
      <p>Time {new Date().toLocaleTimeString()}</p>
      <SimpleFunc testValue="funcValue"/>
      <SimpleClass testValue="classValue"/>
    </div>
  );
}

export default App;
