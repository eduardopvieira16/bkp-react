import React from "react";
import ReactDOM from "react-dom";
// Styles
import "../src/styles/resetStyle.css";
import GlobalStyle from "./styles/global";
//App
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
