import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Logout from "../components/auth/Logout";

export default class Layout extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/" component="" />
        <Route path="/login" component="" />
        <Route path="/logout" component="" /> */}
      </Switch>
    );
  }
}
