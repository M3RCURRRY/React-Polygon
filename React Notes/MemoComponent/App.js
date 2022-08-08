import React, { useState } from "react";

class MemoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    if (nextProps.length !== this.props.length) {
      return true;
    }

    for (let index in nextProps) {
      if (nextProps[index] instanceof Object && this.props[index] instanceof Object) {
        if (Array.isArray(nextProps[index]) && Array.isArray(this.props[index])) {
          if (nextProps[index].length !== this.props[index].length) return true;
        }
        else {
          if (Object.keys(nextProps[index]).length !== Object.keys(this.props[index]).length) return true;
        }

        for (let item in nextProps[index]) {
          if (nextProps[index][item] !== this.props[index][item]) return true;
        }
      }
    }
    

    return false;
    //return super.shouldComponentUpdate(nextProps, nextState);
  }
}

class Test extends MemoComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Render");
    return(
      <div>
        {this.props.data.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    )
  }
}

function App() {
  const [updater, setUpdater] = useState(0);

  return (
    <div>
      <button onClick={() => setUpdater(updater + 1)}>Update parent</button>
      <Test data={[1,2,3,4]}/>
    </div>
  );
}

export default App;