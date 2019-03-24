import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GameItem({ name, description, icon, code }) {
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
          <Link
            to={{
              pathname: `/${code}`
            }}
          >
            <div className="play ui right floated secondary button inverted">
              Play
              <i className="right chevron icon" />
            </div>
          </Link>
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
