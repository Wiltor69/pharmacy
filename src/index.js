import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/pharmacy">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
