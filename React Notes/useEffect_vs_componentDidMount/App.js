import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.css";

class DidMount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: 0 };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.setState({
      width: this.ref.current.clientWidth
    });
  }

  render() {
    return (
      <>
        <div className="box" ref={this.ref} />
        <span className="result">
          width: <b>{this.state.width}</b>
        </span>
      </>
    );
  }
}

function UseEffectComponent() {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, []);

  return (
    <>
      <div className="box" ref={ref} />
      <span className="result">
        width: <b>{width}</b>
      </span>
    </>
  );
}

function UseLayoutComponent() {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth);
  }, []);

  return (
    <>
      <div className="box" ref={ref} />
      <span className="result">
        width: <b>{width}</b>
      </span>
    </>
  );
}

export default function App() {
  return (
    <div>
      <DidMount />
      <UseEffectComponent />
      <UseLayoutComponent />
    </div>
  );
}