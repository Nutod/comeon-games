import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";

// TODO: Add Suspense here
export default class Layout extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    );
  }
}
