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
  state = {
    authState: false
  };

  componentDidMount = () => {
    const user = localStorage.getItem("username");
    this.setState({ authState: user !== null });
  };

  render() {
    // let routes = null;
    // if (!this.state.authState) {
    //   routes = (
    //     <>
    //       <Route path="/login" render={() => <Login />} />
    //       <Redirect to="/login" />
    //     </>
    //   );
    // } else {
    //   routes = (
    //     <>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/login" render={() => <Login />} />
    //       <Route path="/logout" render={() => <Logout />} />
    //     </>
    //   );
    // }

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
