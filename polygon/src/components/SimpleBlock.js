import React from "react";
import styles from "./SimpleBlock.module.css";

class SimpleBlock extends React.Component {
  render() {
    return(
      <div className={styles.SimpleBlock}>
        {this.props.children}
      </div>
    )
  }
}

export default SimpleBlock;