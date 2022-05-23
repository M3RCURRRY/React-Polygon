import React from "react";
import { ThemeContext } from "../../../themeContext";
import styles from "./ModalSpace.module.css";

class ModalSpace extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <div className={styles.modalBackground}>
        <div
          className={styles.modalContainer}
          style={{ backgroundColor: theme.contentBackground }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

ModalSpace.contextType = ThemeContext;

export default ModalSpace;
