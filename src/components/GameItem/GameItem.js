import React from "react";

export default function GameItem({ name, description, icon }) {
  return (
    <div className="game item">
      <div className="ui small image">
        <img src={icon} alt="game-icon" />
      </div>
      <div className="content">
        <div className="header">
          <b className="name">{name}</b>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="extra">
          <div className="play ui right floated secondary button inverted">
            Play
            <i className="right chevron icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
