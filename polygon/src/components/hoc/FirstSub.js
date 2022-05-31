import React from "react";

class FirstSub extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.map((item) => {
          return <p>{item}</p>;
        })}
      </>
    );
  }
}

export default FirstSub;
