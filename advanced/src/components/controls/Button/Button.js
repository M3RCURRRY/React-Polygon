import React from "react";
import styles from "./Button.module.css";
import { ThemeContext } from "../../themeContext";

class Button extends React.Component {
  render() {
    let theme = this.context;
    return (
      <button
        onClick={this.props.onClick}
        className={styles.button}
        style={{
          backgroundColor: theme.contentBackground,
          border: `2px solid ${theme.background}`,
          color: theme.color
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.contextType = ThemeContext;

export default Button;
