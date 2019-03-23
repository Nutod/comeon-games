import React from "react";
import Avatar from "../../components/assets/images/avatar/eric.jpg";

export default function PlayerItem() {
  return (
    <div className="player item">
      <img className="ui avatar image" src={Avatar} alt="avatar" />
      <div className="content">
        <div className="header">
          <b className="name">Eric Beard</b>
        </div>
        <div className="description event">
          <p>I saw you won 500 SEK last time!</p>
        </div>
      </div>
    </div>
  );
}
