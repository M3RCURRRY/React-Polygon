import React from "react";
import SimpleBlock from "./SimpleBlock";

class SimpleBorderedForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Submitted!");
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <SimpleBlock>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit from bordered</button>
      </SimpleBlock>
    );
  }
}

export default SimpleBorderedForm;
