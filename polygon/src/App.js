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
import Parent from "./components/Parent";
import LoginButton from "./components/LoginButton";
import SimpleBorderedForm from "./components/SimpleBorderedForm";
import RefParent from "./components/RefParent";
import ErrorBoundary from "./components/ErrorBoundary";
import ErroredComponent from "./components/ErroredComponent";
import ExceptionComponent from "./components/ExceptionComponent";
import RefButtonContainer from "./components/RefButtonContainer";
import FirstSub from "./components/hoc/FirstSub";

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

function wrapHOC(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        calledTimes: 0,
      };

      this.updateHandler = this.updateHandler.bind(this);
    }

    updateHandler() {
      this.setState((prev) => ({
        calledTimes: prev.calledTimes + 1,
      }));
    }

    componentDidUpdate(prev) {
      console.log("Previous props: ", prev);
      console.log("Current props: ", this.props);
    }

    render() {
      return <WrappedComponent data={this.updateHandler} {...this.props} />;
    }
  };
}

const Wrapped = wrapHOC(FirstSub);

function App() {
  return (
    <div className="App">
      <h1>Hello, {userName}!</h1>
      {parElement}
      <div>{parentElement}</div>
      {compiledLikeElement}
      <p>Time {new Date().toLocaleTimeString()}</p>
      <SimpleFunc testValue="funcValue" />
      <SimpleClass testValue="classValue" />
      <Clock />
      <ChangeContentButton content="Simple Drop Button" />
      <ToggleButton />
      <LoginForm />
      <SimpleList />
      <SimpleForm />
      <SimpleSelectForm />
      <br />
      <br />
      <MultipleForm />
      <Parent
        button={
          <LoginButton
            loginHandler={() => console.log("Child button clicked!")}
          />
        }
      >
        <h1>Some header inside</h1>
        <p>lorem ipsum dolor sit amet</p>
        <button>no action button</button>
      </Parent>
      <SimpleBorderedForm />
      <RefParent />
      <ErrorBoundary>
        <ErroredComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <ExceptionComponent />
      </ErrorBoundary>
      <RefButtonContainer />
      <ErrorBoundary>
        <Wrapped value="Value to render" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
