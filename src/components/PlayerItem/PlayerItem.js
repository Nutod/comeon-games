import React from "react";
import Avatar from "../../components/assets/images/avatar/eric.jpg";

export default function PlayerItem() {
  return (
    <div class="player item">
      <img class="ui avatar image" src={Avatar} alt="avatar" />
      <div class="content">
        <div class="header">
          <b class="name">Eric Beard</b>
        </div>
        <div class="description event">
          <p>I saw you won 500 SEK last time!</p>
        </div>
      </div>
    </div>
  );
}
