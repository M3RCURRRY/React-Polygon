import React from "react";

class ChangeContentButton extends React.Component {
  constructor(props) {
    super(props);
    this.content = props.content;

    this.callHandler = this.callHandler.bind(this);

    this.state = {
      content: this.props.content
    }
  }

  callHandler() {
    this.setState({
      content: "New Content"
    });
  }

  render() {
    return <button onClick={this.callHandler}>{this.state.content}</button>;
  }
}

export default ChangeContentButton;
