import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PRABarChart from "./Components/PRABarChart";
import PlayerCard from "./Components/PlayerCard";
import SeasonAvgGrid from "./Components/SeasonAvgGrid";
import TrueShootingLine from "./Components/TrueShootingLine";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      //

      playerStats: [],
    };

    this.cancel = "";
  }

  getPlayers = (playerId) => {
    let playerData = {};
    console.log(playerId);
    axios
      .get(`https://www.balldontlie.io/api/v1/players/${playerId}`)
      .then((res) => {
        playerData = res.data;

        return axios.get(
          `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`
        );
      })
      .then((res) => {
        playerData = { ...playerData, ...res.data.data[0] };

        return axios.get(
          `https://www.balldontlie.io/api/v1/stats?seasons[]=2019&per_page=100&player_ids[]=${playerId}`
        );
      })
      .then((res) => {
        playerData = { ...playerData, ...res.data };

        this.setState({
          playerStats: [...this.state.playerStats, playerData],
        });
      });
  };

  onSearchChange = (e) => {
    this.cancel && this.cancel.cancel();

    this.cancel = axios.CancelToken.source();

    const searchQuery = e.target.value;

    if (!searchQuery) {
      this.setState({
        results: [],
      });
    } else {
      if (searchQuery.length > 2) {
        axios
          .get(
            `https://www.balldontlie.io/api/v1/players?search=${searchQuery}&per_page=100`,
            {
              cancelToken: this.cancel.token,
            }
          )
          .then((res) => {
            this.setState({
              results: res.data.data,
            });
          });
      }
    }
  };

  render() {
    let searchSuggestions;

    if (this.state.results.length === 0) {
      searchSuggestions = "";
    } else {
      const currentPlayers = this.state.results.filter((player) => {
        return (
          player.height_feet &&
          player.weight_pounds &&
          player.height_inches !== ""
        );
      });

      searchSuggestions = currentPlayers.map((player) => (
        <li key={player.id} onClick={() => this.getPlayers(`${player.id}`)}>
          {player.first_name} {player.last_name}
        </li>
      ));
    }
    return (
      <div className="App">
        <div className="header-container">
          <h1>Stats Don't Lie</h1>
          <input
            type="text"
            className="search-box"
            onChange={this.onSearchChange}
            placeholder="Enter the name of a player"
          />
          <ul className="search-suggestions">{searchSuggestions}</ul>
        </div>
        {this.state.playerStats.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}

        <div className="app-grid-container">
          {this.state.playerStats.map((player) => (
            <SeasonAvgGrid key={player.id} player={player} />
          ))}
        </div>

        <PRABarChart players={this.state.playerStats} />

        <TrueShootingLine players={this.state.playerStats} />
      </div>
    );
  }
}

export default App;
