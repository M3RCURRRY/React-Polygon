import React from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "../../themeContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let theme = this.context;
    return (
      <header className={styles.headerContainer} style={{backgroundColor: theme.foreground}}>
        <div className={styles.logoSide}>
          <h1>ReactCrypto</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={this.props.onFilterClick}>Filter</button>
          <button onClick={this.props.onCompareClick}>Compare</button>
          <button onClick={this.props.onThemeChange}>Change Theme</button>
        </div>
      </header>
    );
  }
}

Header.contextType = ThemeContext;

export default Header;
