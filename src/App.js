import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PRABarChart from "./Components/PRABarChart";
import PlayerCard from "./Components/PlayerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "lebron",
      playerIds: [],
      players: [],
      playerStats: [],
    };
  }
  componentDidMount() {
    this.getPlayerIds();
  }

  getPlayerIds = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players?search=${this.state.query}`
      )
      .then((res) => {
        this.setState({
          playerIds: this.state.playerIds.concat([res.data.data[0].id]),
        });

        return axios.get(
          `https://www.balldontlie.io/api/v1/players/${res.data.data[0].id}`
        );
      })
      .then((res) => {
        this.setState({
          players: this.state.players.concat([res.data]),
        });

        return axios.get(
          `https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${this.state.playerIds[0]}`
        );
      })
      .then((res) => {
        this.setState({
          playerStats: this.state.playerStats.concat(res.data.data),
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Stats Don't Lie</h1>
        <PlayerCard players={this.state.players} />
        <PRABarChart
          player={this.state.players}
          playerStat={this.state.playerStats}
        />
        {/* <button onClick={this.getPlayerIds}>HELP MEEEEEE</button> */}
      </div>
    );
  }
}

export default App;
