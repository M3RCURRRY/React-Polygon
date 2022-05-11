import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import ChangeContentButton from "./components/ChangeContentButton";
import SimpleClass from "./components/SimpleClass";
import SimpleFunc from "./components/SimpleFunc";
import ToggleButton from "./components/ToggleButton";
import LoginForm from "./components/LoginForm";
import SimpleList from "./components/SimpleList";
import SimpleForm from "./components/SimpleForm";
import SimpleSelectForm from "./components/SimpleSelectForm";
import MultipleForm from "./components/MultipleForm";


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
      <Clock/>
      <ChangeContentButton content="Simple Drop Button"/>
      <ToggleButton/>
      <LoginForm/>
      <SimpleList/>
      <SimpleForm/>
      <SimpleSelectForm/>
      <br />
      <br />
      <MultipleForm />
    </div>
  );
}

export default App;
