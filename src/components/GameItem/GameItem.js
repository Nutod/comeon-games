import React, { memo } from "react";
import PropTypes from "prop-types";

function GameItem({ name, description, icon, code }) {
  const runGame = (_, name) => {
    window.comeon.game.launch(name);
  };

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
          <div
            className="play ui right floated secondary button inverted"
            onClick={_ => runGame(_, code)}
          >
            Play
            <i className="right chevron icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

GameItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default memo(GameItem);
