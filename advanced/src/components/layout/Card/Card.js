import React from "react";
import { ThemeContext } from "../../themeContext";
import styles from "./Card.module.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let theme = this.context;
    return (
      <div
        className={styles.card}
        style={{
          backgroundColor: theme.contentBackground,
          color: theme.color,
          border: `2px solid ${theme.contentForeground}`,
        }}
      >
        <h2>{this.props.header}</h2>
        <ul>
          {this.props.content.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

Card.contextType = ThemeContext;

export default Card;