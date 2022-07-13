import React from "react";
import "./styles.css";

console.clear();

function Foo() {
  return <h2>Magic</h2>;
}

class Bee extends React.Component {
  render() {
    return <h1>Huge magic</h1>;
  }
}

const FooComp = <Foo />;
const BeeComp = <Bee />;
console.log(FooComp);
console.log(BeeComp);

const CopyFoo = Object.assign({}, FooComp);
const CopyBee = Object.assign({}, BeeComp);

console.log(React.isValidElement(FooComp)); // true
console.log(React.isValidElement(BeeComp)); // true

console.log(React.isValidElement(CopyFoo)); // true
console.log(React.isValidElement(CopyBee)); // true

const HandmadeFoo = {
  type: Foo,
  key: null,
  ref: null,
  props: Object,
  _owner: null,
  _store: Object
};

const HandmadeBee = {
  type: Bee,
  key: null,
  ref: null,
  props: {},
  _owner: null,
  _store: {}
};

console.log(React.isValidElement(HandmadeFoo)); // false
console.log(React.isValidElement(HandmadeBee)); // false

export default function App() {
  return (
    <div className="App">
      {FooComp}
      {BeeComp}
    </div>
  );
}
