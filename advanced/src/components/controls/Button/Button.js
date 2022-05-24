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
          backgroundColor: theme.contentForeground,
          border: `15px solid ${theme.contentBackground}`,
          color: theme.color
        }}
      >
        {this.props.content}
      </button>
    );
  }
}

Button.contextType = ThemeContext;

export default Button;
