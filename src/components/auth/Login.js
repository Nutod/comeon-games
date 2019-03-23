import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: []
  };

  handleSubmit = event => {
    event.preventDefault();

    this.isFormValid() &&
      fetch("http://localhost:3001/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(data => {
          this.props.history.replace("/");
          localStorage.setItem("username", data);
        });
  };

  isFormValid = () => {
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, password }) => {
    return !username.length || !password.length;
  };

  inputChangeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div className="login" style={{ display: "block", paddingTop: "20%" }}>
        <div className="ui grid centered">
          <form onSubmit={this.handleSubmit}>
            <div className="fields">
              <div className="required field">
                <div className="ui icon input">
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.inputChangeHandler}
                    placeholder="Username"
                  />
                  <i className="user icon" />
                </div>
              </div>
              <div className="required field">
                <div className="ui icon input">
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.inputChangeHandler}
                    placeholder="Password"
                  />
                  <i className="lock icon" />
                </div>
              </div>
              <div className="field">
                <div className="ui icon input">
                  <input type="submit" value="Login" />
                  <i className="right chevron icon" />
                </div>
              </div>
            </div>
          </form>
          {this.state.errors.length > 0 && (
            <h3 style={{ color: "#fff" }}>Something went wrong</h3>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
