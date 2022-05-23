import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.changeContext}>{this.props.content}</button>
    )
  }
}

export default Button;