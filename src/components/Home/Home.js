import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import PlayerItem from "../PlayerItem/PlayerItem";
import Search from "../Search/Search";
import GameList from "../GameList/GameList";
import CategoryList from "../CategoryList/CategoryList";

const MainContainer = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  padding: 2em 2em 7em;
  max-width: 990px;
`;

export default class Home extends Component {
  state = {
    games: null,
    categories: null,
    error: null,
    searchString: ""
  };

  componentDidMount = () => {
    const urls = [
      "http://localhost:3001/games",
      "http://localhost:3001/categories"
    ];

    Promise.all(
      urls.map(url =>
        fetch(url)
          .then(response => response.json())
          .catch(error => this.setState({ error }))
      )
    ).then(([games, categories]) => {
      this.setState({ games, categories });
      localStorage.setItem("games", JSON.stringify(this.state.games));
    });
  };

  filterGames = (_, id) => {
    const games = JSON.parse(localStorage.getItem("games"));
    const newGames = games.filter(game => game.categoryIds.includes(id));
    this.setState({ games: newGames });
  };

  // TODO: Debounce this method
  searchHandler = ({ target }) => {
    const games = JSON.parse(localStorage.getItem("games"));
    this.setState(() => ({ searchString: target.value }));
    const newGames = games.filter(game =>
      game.name
        .toLowerCase()
        .includes(this.state.searchString.toLowerCase().trim())
    );
    this.setState({ games: newGames });
  };

  // TODO: Add svg loading animation
  render() {
    return (
      <>
        <Header />
        <MainContainer>
          <div className="casino">
            <div className="ui grid centered">
              <div className="twelve wide column">
                <div className="ui list">
                  <PlayerItem />
                </div>
                <div
                  className="logout ui left floated secondary button inverted"
                  onClick={() => this.props.history.replace("/logout")}
                >
                  <i className="left chevron icon" />
                  Log Out
                </div>
              </div>
              <Search
                searchValue={this.state.searchString}
                changed={this.searchHandler}
              />
            </div>
            <div className="ui grid">
              <GameList games={this.state.games} />
              <CategoryList
                categories={this.state.categories}
                filter={this.filterGames}
              />
            </div>
          </div>
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
        </MainContainer>
      </>
    );
  }
}
