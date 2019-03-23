import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import PlayerItem from "../PlayerItem/PlayerItem";
import Search from "../Search/Search";
import CategoryItem from "../CategoryItem/CategoryItem";
import GameList from "../GameList/GameList";

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
    filteredGames: null,
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
    });

    localStorage.setItem("games", JSON.stringify(this.state.games));
  };

  getAllGames = async () => {
    const response = await fetch("http://localhost:3001/games");
    const games = await response.json();
    this.setState(() => ({ games }));
  };

  filterGames = (_, id) => {
    const games = [...this.state.games];
    if (id === 0 && games.length <= 1) {
      this.getAllGames();
    } else {
      const newGames = games.filter(game => {
        return game.categoryIds.includes(id);
      });
      this.setState(() => ({ games: newGames }));
    }
  };

  // TODO: Debounce this method
  searchGames = ({ target }) => {
    this.setState(() => ({ searchString: target.value }));
    const filteredGames = this.state.games.filter(game =>
      game.name.toLowerCase().includes(this.state.searchString.toLowerCase())
    );
    this.setState(() => ({ filteredGames }));
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
                <div className="logout ui left floated secondary button inverted">
                  <i className="left chevron icon" />
                  Log Out
                </div>
              </div>
              <Search
                searchValue={this.state.searchString}
                changed={this.searchGames}
              />
            </div>
            <div className="ui grid">
              <GameList games={this.state.games} />
              <div className="four wide column">
                <h3 className="ui dividing header">Categories</h3>
                <div className="ui selection animated list category items">
                  {this.state.categories ? (
                    this.state.categories.map(({ id, name }) => (
                      <CategoryItem
                        key={name}
                        name={name}
                        click={event => this.filterGames(event, id)}
                      />
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
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
