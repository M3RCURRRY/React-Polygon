import React from "react";
import RefChild from "./RefChild";

class RefParent extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.onGetRefState = this.onGetRefState.bind(this);
  }

  onGetRefState() {
    console.log(this.myRef.current.state.textValue);
  }

  render() {
    return(
      <div>
        <RefChild ref={this.myRef}/>
        <button onClick={this.onGetRefState}>Get child state</button>
      </div>
    );
  }
}

export default RefParent;