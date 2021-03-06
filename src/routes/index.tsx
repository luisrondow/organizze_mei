import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import LoginContainer from "../containers/Login";
import SignupContainer from "../containers/Signup";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/signup" exact component={SignupContainer} />
    </Switch>
  );
}
