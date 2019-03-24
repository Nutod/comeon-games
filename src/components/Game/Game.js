import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { MainContainer } from "../Home/Home";
import Header from "../Header/Header";

function Game(props) {
  const gameName = props.match.params.gameId;

  useEffect(() => {
    window.comeon.game.launch(gameName);
  }, []);

  return (
    <>
      <Header />
      <MainContainer>
        <div className="ingame">
          <div className="ui grid centered">
            <div className="three wide column">
              <div
                className="ui right floated secondary button inverted"
                onClick={() => {
                  props.history.goBack();
                }}
              >
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
      </MainContainer>
    </>
  );
}

export default withRouter(Game);
