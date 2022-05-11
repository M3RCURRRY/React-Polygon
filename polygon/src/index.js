import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = <h2>Time : {new Date().toLocaleTimeString()}</h2>;
  root.render(element);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//setInterval(tick, 1000);

reportWebVitals();
