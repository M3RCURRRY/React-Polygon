import React from "react";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false
    }

    //this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState((previous) => ({
      isToggled: !previous.isToggled
    }));
  }

  render() {
    return(
      <button onClick={this.toggleHandler.bind(this)}>
        {this.state.isToggled ? "Toggled" : "Not Toggled"}
      </button>
    );
  }
}

export default ToggleButton;