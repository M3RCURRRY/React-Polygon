import React from "react";

class SimpleListItem extends React.Component {
  render() {
    return <li>{this.props.value}</li>
  }
}

export default SimpleListItem;