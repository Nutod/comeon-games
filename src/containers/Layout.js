import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";

const Login = lazy(() => {
  return import("../components/auth/Login");
});

const Logout = lazy(() => {
  return import("../components/auth/Logout");
});

export default class Layout extends Component {
  render() {
    return (
      <Switch>
        <Suspense fallback={() => <p>Loading...</p>}>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/logout" render={() => <Logout />} />
        </Suspense>
      </Switch>
    );
  }
}
