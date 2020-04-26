import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import PRABarChart from "./Components/PRABarChart";
import PlayerCard from "./Components/PlayerCard";
import SeasonAvgGrid from "./Components/SeasonAvgGrid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "lebron",

      playerStats: [],
    };
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
          `https://www.balldontlie.io/api/v1/players/${playerData.id}`
        );
      })
      .then((res) => {
        return axios.get(
          `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerData.id}`
        );
      })
      .then((res) => {
        playerData = { ...playerData, ...res.data.data[0] };

        this.setState({
          playerStats: [...this.state.playerStats, playerData],
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Stats Don't Lie</h1>

        {this.state.playerStats.map((player) => (
          <PlayerCard player={player} />
        ))}

        <SeasonAvgGrid />
        {/* <PRABarChart playerStat={this.state.playerStats} /> */}
        {/* <button onClick={this.getPlayerIds}>HELP MEEEEEE</button> */}
      </div>
    );
  }
}

export default App;
