import React from "react";
import "./styles.css";

const Comp = (props) => {
  return <p>Content : {props.content}</p>;
};

Comp.defaultProps = { content: "Aboba" };

export default function App() {
  return (
    <div className="App">
      <Comp />
      <Comp content={undefined} />
      <Comp content={null} />
      <Comp content={false} />
    </div>
  );
}