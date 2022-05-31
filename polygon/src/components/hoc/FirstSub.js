import React from "react";

class FirstSub extends React.Component {
  render() {
    return (
      <>
        <p>{this.props[0]}</p>
        <button onClick={this.props.data}>Update state to call wrapper</button>
      </>
    );
  }
}

export default FirstSub;
