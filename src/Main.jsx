import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import ScrollToTop from "./Components/ScrollToTop"
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
