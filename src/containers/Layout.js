import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";

const Login = lazy(() => {
  return import("../components/auth/Login");
});

const Logout = lazy(() => {
  return import("../components/auth/Logout");
});

const Game = lazy(() => {
  return import("../components/Game/Game");
});

export default class Layout extends Component {
  constructor(props) {
    super(props);
    const user = localStorage.getItem("username");
    this.state = {
      authState: user !== null
    };
  }

  render() {
    let routes = null;
    if (this.state.authState) {
      routes = (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/logout" render={() => <Logout />} />
          <Route path="/:gameId" render={() => <Game />} />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Redirect to="/login" />
        </Switch>
      );
    }

    return <Suspense fallback={() => <p>Loading...</p>}>{routes}</Suspense>;
  }
}
