import React, { Suspense, useState } from "react";
import "./styles.css";

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

export function App() {
  //const ref = React.createRef();
  const ref = useRef(null);

  function callRef() {
    console.log(ref.current);
  }

  return (
    <div>
      <FancyButton ref={ref}>Click me!</FancyButton>
      <button onClick={() => callRef()}>Ref usage</button>
    </div>
  );
}

export default App;