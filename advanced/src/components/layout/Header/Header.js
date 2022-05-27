import React from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "../../themeContext";
import Button from "../../controls/Button/Button";

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
          <Button onClick={this.props.onFilterClick}>Filter</Button>
          <Button onClick={this.props.onCompareClick}>Compare</Button>
          <Button onClick={this.props.onThemeChange}>Change Theme</Button>
        </div>
      </header>
    );
  }
}

Header.contextType = ThemeContext;

export default Header;
