import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.css";

//
// Warning: React.createFactory() is deprecated and will be
// removed in a future major release. Consider using JSX or
// use React.createElement() directly instead.
//

function Card() {
  return <h1>New card</h1>;
}

const BoundariedComponent = (BaseComponent) => {
  const factory = React.createFactory(BaseComponent);

  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hasError: false,
        errorInfo: null
      };
    }

    componentDidCatch(e, eInfo) {
      this.setState({
        hasError: true,
        errorInfo: eInfo
      });
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong</h1>;
      }

      return factory({ ...this.props });
    }
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const El = BoundariedComponent(Card);
    return (
      <div>
        <El />
      </div>
    );
  }
}

export default App;
