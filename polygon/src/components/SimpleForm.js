import React from "react";

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    console.log("Default event prevented");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Your name:
          <br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br/>
          <textarea value={this.state.value} onChange={this.handleChange}/>
        </label>
        <br/>
        <input type="submit" value="Submit!"/>
      </form>
    )
  }
}

export default SimpleForm;