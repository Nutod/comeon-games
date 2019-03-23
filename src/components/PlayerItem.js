import React from "react";
import Avatar from "../components/assets/images/avatar/eric.jpg";

export default function PlayerItem() {
  return (
    <div class="player item">
      <img class="ui avatar image" src={Avatar} alt="avatar" />
      <div class="content">
        <div class="header">
          <b class="name" />
        </div>
        <div class="description event" />
      </div>
    </div>
  );
}
