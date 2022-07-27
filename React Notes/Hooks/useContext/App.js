import React, { useState } from "react";
import "./styles.css";
import ThemeContext from "./context";
import Cards from "./Cards";

export default function App() {
  const [device, setDevice] = useState("desktop");
  return (
    <ThemeContext.Provider value={{ device, setDevice }}>
      <div className="App">
        <Cards />
      </div>
    </ThemeContext.Provider>
  );
}
