import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --accent: #fb6d00;
  --bg-grey: #f7f7f7;
  --element-grey: #DADDE1;
  --hover-grey: #eaeaea;
  --text-main: #606770;
  --pure-white: #fff;
  --nav-black: #242424;
  }`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
