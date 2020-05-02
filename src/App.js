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
      searchQuery: "",
      results: [],
      //
      query: "aldridge",
      playerStats: [],
    };

    this.cancel = "";
  }
  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    let playerData = {};
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players?search=${this.state.query}`
      )
      .then((res) => {
        playerData = res.data.data[0];

        return axios.get(
          `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerData.id}`
        );
      })
      .then((res) => {
        playerData = { ...playerData, ...res.data.data[0] };

        return axios.get(
          `https://www.balldontlie.io/api/v1/stats?seasons[]=2019&per_page=100&player_ids[]=${playerData.id}`
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
    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    this.setState({
      searchQuery: e.target.value,
    });

    axios
      .get(
        `https://www.balldontlie.io/api/v1/players?search=${this.state.searchQuery}`,
        {
          cancelToken: this.cancel.token,
        }
      )
      .then((res) => {
        this.setState({
          results: res.data.data,
        });
      });
  };

  render() {
    let searchSuggestions;

    if (this.state.results.length === 0) {
      searchSuggestions = "";
    } else {
      searchSuggestions = this.state.results.reverse().map((player) => (
        <li key={player.id}>
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
