import React from "react";
import GlobalStyle from "./styles/global";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
