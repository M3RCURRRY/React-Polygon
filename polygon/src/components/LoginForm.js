import React from "react";
import LoginButton from "./LoginButton";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.isHeaderVisible = false;

    this.state = {
      isLogged: false,
    };

    this.changeLogInState = this.changeLogInState.bind(this);
  }

  changeLogInState() {
    this.isHeaderVisible = true;
    this.setState({
      isLogged: true,
    });
  }

  render() {
    return (
      <div>
        {
          this.isHeaderVisible &&
          <h2>Visible Header</h2>
        }
        <h1>{this.state.isLogged ? "Successfully logged in" : "Not logged in"}</h1>
        <LoginButton loginHandler={this.changeLogInState} />
      </div>
    );
  }
}

export default LoginForm;
