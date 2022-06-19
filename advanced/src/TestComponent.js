import React from "react";

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textdata: "TEST1",
    }
  }

  callErrorOnChange() {
    throw new Error("BAN SNOVA!");
  }

  render() {
    // Если расскомментировать эту строку - отрендерит Error handled (от внутреннего предохранителя)
    // throw new Error("");
    return (
      <>
        <p>{this.state.textdata}</p>
        <button onClick={() => this.callErrorOnChange()}>Change to TEST2</button>
      </>
    );
  }
}

export default TestComponent;
