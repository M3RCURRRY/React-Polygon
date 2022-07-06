import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOM, { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles.css";

class Comp extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1>{this.props.content}</h1>
        <h3>{this.props.data.names.John}</h3>
        <h3>{this.props.data.names.Mary}</h3>
      </div>
    );
  }
}

class PureComp extends React.PureComponent {
  render() {
    const John = this.props.data.names.John;
    const Mary = this.props.data.names.Mary;

    return (
      <div>
        <h1>{this.props.content}</h1>
        <h3>{John}</h3>
        <h3>{Mary}</h3>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shallow: "Shallow content",
      deep: "Deep content",
      data: {
        names: {
          John: "John",
          Mary: "Mary"
        }
      }
    };
  }

  changeShallowContent() {
    this.setState({
      shallow: "New shallow content"
    });
    console.log("Shallow state value changed");
  }

  changeDeepContent() {
    this.setState({
      deep: "New deep content"
    });
  }

  changeData() {
    this.setState({
      data: {
        names: {
          John: "Mister John",
          Mary: "Miss Mary"
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Comp content={this.state.deep} data={this.state.data} />
        <PureComp content={this.state.shallow} data={this.state.data} />
        <button onClick={() => this.changeShallowContent()}>
          Change shallow content
        </button>

        <button onClick={() => this.changeDeepContent()}>
          Change deep content
        </button>

        <button onClick={() => this.changeData()}>Change both data</button>
      </div>
    );
  }
}

class A extends React.Component {
  render() {
    console.log("Component render");
    return <h1>React.Component</h1>;
  }
}

class B extends React.PureComponent {
  render() {
    console.log("Pure render");
    return <h1>React.PureComponent</h1>;
  }
}

const subRootElement = document.getElementById("sub-root");
const subRoot = createRoot(subRootElement);

ReactDOM.render(A, subRootElement);
ReactDOM.render(A, subRootElement);

ReactDOM.render(B, subRootElement);
ReactDOM.render(B, subRootElement);

export default App;