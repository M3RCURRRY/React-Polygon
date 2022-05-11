import React from "react";

class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.loginHandler}>Press to log in</button>;
  }
}

export default LoginButton;