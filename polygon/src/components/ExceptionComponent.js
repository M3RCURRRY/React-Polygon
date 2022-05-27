import React from "react";

class ExceptionComponent extends React.Component {
  render() {
    throw new SyntaxError("ABOBA");
    return(
      <div>Cannot be rendered!</div>
    )
  }
}

export default ExceptionComponent;