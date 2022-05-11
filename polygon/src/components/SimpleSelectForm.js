import React from "react";

class SimpleSelectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "one",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("Your choise " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select position
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="one">First</option>
            <option value="two">Second</option>
            <option value="three">Third</option>
            <option value="four">Fourth</option>
          </select>
          <input type="submit" value="Submit!" />
        </label>
      </form>
    );
  }
}

export default SimpleSelectForm;
