import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

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
      .then(data => console.log(data));
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
        </div>
      </div>
    );
  }
}
