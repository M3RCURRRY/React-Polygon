import React, { Suspense, useRef, useState } from "react";
import "./styles.css";

class Foo extends React.Component {
  render() {
    return <h1>{this.props.content}</h1>;
  }
}

Foo.defaultProps = { content: "Aboba" };

export function App() {
  return (
    <div>
      <Foo />
      <Foo content="Abobus" />
    </div>
  );
}

export default App;
