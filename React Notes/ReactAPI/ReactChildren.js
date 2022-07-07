import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.css";

function Item(props) {
  return (
    <div>
      <h2>{props.value}</h2>
    </div>
  );
}

function Parent(props) {
  return <div>{React.Children.only(props.children)}</div>;
}

export function App() {
  return (
    <div>
      <Parent>
        <Item value="First" />
        {
          // Expected only one child
          // <Item value="First" />
        }
      </Parent>
    </div>
  );
}

export default App;
