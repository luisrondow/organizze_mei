import React from "react";
import GlobalStyle from "./styles/global";
import { Router } from "react-router-dom";
import Home from "./containers/Home";
import DashboardContainer from "./containers/Dashboard";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home>
        <DashboardContainer />
      </Home>
    </>
  );
}

export default App;
