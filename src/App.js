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
      searchQuery: "",
      playerStats: [],
    };

    this.cancel = "";
  }

  getPlayers = (playerId) => {
    let playerData = {};

    axios
      .get(`https://www.balldontlie.io/api/v1/players/${playerId}`)
      .then((res) => {
        playerData = res.data;

        return axios.get(
          `https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`
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

        this.setState(
          {
            playerStats: [...this.state.playerStats, playerData].filter(
              (player) => {
                return player.pts;
              }
            ),
          },
          () => {
            this.setState({
              searchQuery: "",
              results: [],
            });
          }
        );
      });
  };

  onSearchChange = (e) => {
    this.cancel && this.cancel.cancel();

    this.cancel = axios.CancelToken.source();

    this.setState({
      searchQuery: e.target.value,
    });

    if (!this.state.searchQuery) {
      this.setState({
        results: [],
      });
    } else {
      if (this.state.searchQuery.length > 2) {
        axios
          .get(
            `https://www.balldontlie.io/api/v1/players?search=${this.state.searchQuery}&per_page=20`,
            {
              cancelToken: this.cancel.token,
            }
          )
          .then((res) => {
            this.setState({
              results: res.data.data,
            });
          })
          .catch((err) => console.log(err));
      }
    }
  };

  removePlayer = (playerId) => {
    const updatedPlayers = this.state.playerStats.filter((player) => {
      return player.id !== playerId;
    });

    this.setState({
      playerStats: updatedPlayers,
    });
  };

  render() {
    let searchSuggestions;

    if (this.state.results.length === 0) {
      searchSuggestions = "";
    } else {
      const currentPlayers = this.state.results.filter((player) => {
        return player.position !== "";
      });

      searchSuggestions = currentPlayers.map((player) => (
        <li key={player.id} onClick={() => this.getPlayers(player.id)}>
          {`${player.first_name} ${player.last_name} - ${player.position} - ${player.team.full_name}`}
        </li>
      ));

      console.log(currentPlayers);
    }

    let searchEnabled;

    if (this.state.playerStats.length > 4) {
      searchEnabled = true;
    } else {
      searchEnabled = false;
    }

    let placeholderText;

    switch (this.state.playerStats.length) {
      case 0:
        placeholderText = "Search for up to five players...";
        break;
      case 1:
        placeholderText = "Search for up to four more players...";
        break;
      case 2:
        placeholderText = "Search for up to three more players...";
        break;
      case 3:
        placeholderText = "Search for up to two more players...";
        break;
      case 4:
        placeholderText = "Search for one more player...";
        break;
      case 5:
        placeholderText = "Remove at least one player to add another player...";
        break;

      default:
        placeholderText = "Search for a player...";
    }

    if (this.state.playerStats.length === 0) {
      return (
        <div className="App">
          <div className="header-container">
            <h1>
              Stats Don't Lie <i className="fas fa-basketball-ball"></i>
            </h1>
            <div className="search-container">
              <input
                disabled={searchEnabled}
                type="text"
                className="search-box"
                onChange={this.onSearchChange}
                placeholder={placeholderText}
                value={this.state.searchQuery}
              />
            </div>
            <ul className="search-suggestions">{searchSuggestions}</ul>
            {/* <span>
              Start by using the search bar to find up to five players
            </span>
            <br /> */}

            <small>
              Note: Only players who have recorded stats for the 2019-2020
              season are available
            </small>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="header-container">
            <h1>
              Stats Don't Lie <i className="fas fa-basketball-ball"></i>
            </h1>
            <div className="search-container">
              <input
                disabled={searchEnabled}
                type="text"
                className="search-box"
                onChange={this.onSearchChange}
                placeholder={placeholderText}
                value={this.state.searchQuery}
              />
            </div>

            <ul className="search-suggestions">{searchSuggestions}</ul>
          </div>

          <PlayerCard
            players={this.state.playerStats}
            removePlayer={this.removePlayer}
          />

          <SeasonAvgGrid players={this.state.playerStats} />

          <PRABarChart players={this.state.playerStats} />

          <TrueShootingLine players={this.state.playerStats} />
        </div>
      );
    }
  }
}

export default App;
