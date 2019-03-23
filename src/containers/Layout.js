import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Logout from "../components/auth/Logout";

const Login = lazy(() => {
  return import("../components/auth/Login");
});

// TODO: Add Suspense here
export default class Layout extends Component {
  render() {
    return (
      <Switch>
        <Suspense fallback={() => <p>Loading...</p>}>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/logout" component={Logout} />
        </Suspense>
      </Switch>
    );
  }
}
