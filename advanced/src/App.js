import "./App.css";
import "./reset.css";

import React from "react";
import { ThemeContext, themes } from "./components/themeContext";
import Header from "./components/layout/Header/Header";
import FilterModal from "./components/modals/FilterModal";
import CompareModal from "./components/modals/CompareModal";
import CardContainer from "./components/layout/CardContainer/CardContainer";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundaryUpper from "./ErrorBoundaryUpper";
import TestComponent from "./TestComponent";

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

  callException() {
    throw new Error("BAN!");
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
          <ErrorBoundaryUpper>
            <ErrorBoundary>
              {/* Не обработается, т.к. обработчик вызывается отложенно по событию */}
              <button onClick={() => {this.causeError()}}>Click me to cause error</button>
              {/* Не обработается, т.к. обработчик вызывается отложенно по событию */}
              <button onClick={() => {this.callException()}}>Click me to cause error</button>
              <TestComponent />
            </ErrorBoundary>
          </ErrorBoundaryUpper>
          
          <CardContainer />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
