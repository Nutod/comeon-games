import React from "react";
import Header from "./Header";
import PlayerItem from "./PlayerItem";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  padding: 2em 2em 7em;
  max-width: 990px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <div class="casino">
          <div class="ui grid centered">
            <div class="twelve wide column">
              <div class="ui list">
                {/* player item template  */}
                <PlayerItem />
                {/* <!-- end player item template --> */}
              </div>
              <div class="logout ui left floated secondary button inverted">
                <i class="left chevron icon" />
                Log Out
              </div>
            </div>
            <div class="four wide column">
              <div class="search ui small icon input ">
                <input type="text" placeholder="Search Game" />
                <i class="search icon" />
              </div>
            </div>
          </div>
          <div class="ui grid">
            <div class="twelve wide column">
              <h3 class="ui dividing header">Games</h3>

              <div class="ui relaxed divided game items links">
                {/* <!-- game item template --> */}
                <div class="game item">
                  <div class="ui small image">
                    <img src="" alt="game-icon" />
                  </div>
                  <div class="content">
                    <div class="header">
                      <b class="name" />
                    </div>
                    <div class="description" />
                    <div class="extra">
                      <div class="play ui right floated secondary button inverted">
                        Play
                        <i class="right chevron icon" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end game item template --> */}
              </div>
            </div>
            <div class="four wide column">
              <h3 class="ui dividing header">Categories</h3>

              <div class="ui selection animated list category items">
                {/* <!-- category item template --> */}
                <div class="category item">
                  <div class="content">
                    <div class="header" />
                  </div>
                </div>
                {/* <!-- end category item template --> */}
              </div>
            </div>
          </div>
        </div>
        <div class="ingame">
          <div class="ui grid centered">
            <div class="three wide column">
              <div class="ui right floated secondary button inverted">
                <i class="left chevron icon" />
                Back
              </div>
            </div>
            <div class="ten wide column">
              <div id="game-launch" />
            </div>
            <div class="three wide column" />
          </div>
        </div>
      </MainContainer>
    </>
  );
}
