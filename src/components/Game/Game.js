import React from "react";

export default function Game() {
  return (
    <div className="ingame">
      <div className="ui grid centered">
        <div className="three wide column">
          <div className="ui right floated secondary button inverted">
            <i className="left chevron icon" />
            Back
          </div>
        </div>
        <div className="ten wide column">
          <div id="game-launch" />
        </div>
        <div className="three wide column" />
      </div>
    </div>
  );
}
