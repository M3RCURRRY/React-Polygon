import React from "react";

class SimpleClass extends React.Component {
  constructor(props) {
    super(props);
    this.value = props.testValue;
  }

  render() {
    return (
      <div>
        <p>Class component. Test value : {this.value} or {this.props.testValue}</p>
      </div>
    )
  }
}

export default SimpleClass;