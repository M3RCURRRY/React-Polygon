import React from "react";

class RefChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }


  onChangeHandler(e) {
    this.setState({
      textValue : e.target.value,
    })
  }

  render() {
    return(
      <textarea onChange={this.onChangeHandler}></textarea>
    )
  }
}

export default RefChild;