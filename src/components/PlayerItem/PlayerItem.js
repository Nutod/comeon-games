import React, { Component } from "react";

export default class PlayerItem extends Component {
  state = {
    avatar: "",
    name: "",
    event: ""
  };

  componentDidMount = () => {
    const avatar = localStorage.getItem("avatar");
    const name = localStorage.getItem("username");
    const event = localStorage.getItem("event");

    this.setState({ avatar, name, event });
  };

  render() {
    const { name, avatar, event } = this.state;

    return (
      <div className="player item">
        <img className="ui avatar image" src={avatar} alt="avatar" />
        <div className="content">
          <div className="header">
            <b className="name">{name}</b>
          </div>
          <div className="description event">
            <p>{event}</p>
          </div>
        </div>
      </div>
    );
  }
}
