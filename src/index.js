import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const GlobalStyle = createGlobalStyle`
:root {
  /* --accent: #fb6d00; */
  /* --accent-hover: #c76010; */
  --accent: #11b3ff;
  --accent-hover: #179bd9;
  --bg-grey: #f7f7f7;
  --element-grey: #DADDE1;
  --hover-grey: #efefef;
  --text-main: #606770;
  /* --element-grey: #e1deda;
  --text-main: #706c60; */
  --text-main-transparent: #60677099;
  --nav-black: #242424;
  --nav-black-transparent: #24242490;
  --pure-white: #fff;
  }`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </SessionContextProvider>
  </React.StrictMode>
);
