import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/logo.svg";

const Grid = styled.div`
  height: 100%;
  position: relative;
`;

const Column = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding-top: 15%;
`;

const Error = styled.div`
  color: #9f3a38 !important;
  border-color: #9f3a38 !important;
`;

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: [],
    loading: false
  };

  // TODO: Check status code

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
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
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            throw new Error(response.statusText);
          }
        })
        .then(res => res.json())
        .then(({ status, player }) => {
          console.log(status);
          if (status === "success") {
            this.props.history.replace("/");
            localStorage.setItem("username", player.name);
            localStorage.setItem("avatar", player.avatar);
            localStorage.setItem("event", player.event);
          } else {
            let errors = [];
            let error = { message: "User not Found" };
            this.setState({ errors: errors.concat(error) });
          }
        })
        .catch(err => console.log("Cheating..."));
    this.setState({ loading: false });
  };

  isFormValid = () => {
    console.log("Validating...");
    let errors = [];
    let error;
    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      console.log("Not Valid...");
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
      <Grid className="ui middle aligned center aligned">
        <Column>
          <img src={Logo} alt="Logo" className="image" />

          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
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
              <input
                type="submit"
                value={this.state.loading ? "" : "Login"}
                className="ui fluid large submit button"
                disabled={this.state.loading}
              />
            </div>

            {this.state.errors.length > 0 && (
              <Error className="ui message">
                <h3>Something went wrong!</h3>
                {this.state.errors.map(err => (
                  <p key={err.message}>{err.message}</p>
                ))}
              </Error>
            )}
          </form>
        </Column>
      </Grid>
    );
  }
}

export default withRouter(Login);
