import React from "react";

class Parent extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
        {this.props.button}
      </div>
    )
  }
}

export default Parent;