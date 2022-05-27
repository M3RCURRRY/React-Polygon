import "./App.css";
import "./reset.css";

import React from "react";
import { ThemeContext, themes } from "./components/themeContext";
import Header from "./components/layout/Header/Header";
import FilterModal from "./components/modals/FilterModal";
import CompareModal from "./components/modals/CompareModal";
import CardContainer from "./components/layout/CardContainer/CardContainer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.light,
      isFilterOpened: false,
      isCompareOpened: false,
    };

    this.toggleTheme = this.toggleTheme.bind(this);
    this.toggleFilterModal = this.toggleFilterModal.bind(this);
    this.toggleCompareModal = this.toggleCompareModal.bind(this);
  }

  toggleTheme() {
    this.setState((prev) => ({
      theme: prev.theme === themes.dark ? themes.light : themes.dark,
    }));
  }

  toggleFilterModal() {
    this.setState((prev) => ({
      isFilterOpened: !prev.isFilterOpened,
    }));
  }

  toggleCompareModal() {
    this.setState((prev) => ({
      isCompareOpened: !prev.isCompareOpened,
    }));
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: this.state.theme.background,
          color: this.state.theme.color,
        }}
      >
        <ThemeContext.Provider value={this.state.theme}>
          {this.state.isFilterOpened && <FilterModal onSubmit={this.toggleFilterModal}/>}
          {this.state.isCompareOpened && <CompareModal />}

          <Header
            onCompareClick={this.toggleCompareModal}
            onFilterClick={this.toggleFilterModal}
            onThemeChange={this.toggleTheme}
          />

          <CardContainer />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
