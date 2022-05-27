import React from "react";

class ErroredComponent extends React.Component {
  constructor(props) {
    super(props);

    this.variable = 0;
  }
  
  someHandler() {
    this.variable += 1;
  }

  render() {
    return(
      <button onClick={this.someHandler}>Cause handler error</button>
    )
  }
}

export default ErroredComponent;