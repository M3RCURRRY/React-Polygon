import React from "react";

const RefButton = React.forwardRef((props, ref) => {
  <button ref={ref}>
    {props.children}
  </button>
})

class RefButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.getButtonPropsHandler = this.getButtonPropsHandler.bind(this);
  }

  getButtonPropsHandler() {
    console.log(this.ref);
  }

  render() {
    return(
      <div>
        <RefButton ref={this.ref}>Ref Button instance</RefButton>
        <button onClick={this.getButtonPropsHandler}>Get DOM button!</button>
      </div>
    )
  }
}

export default RefButtonContainer;