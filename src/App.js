import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PRABarChart from "./Components/PRABarChart";
import PlayerCard from "./Components/PlayerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "paul",
      playerIds: [],
      players: [],
    };
  }
  componentDidMount() {}

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
      .then((res) =>
        this.setState({
          players: this.state.players.concat([res.data]),
        })
      );
  };

  render() {
    return (
      <div className="App">
        <h1>Stats Don't Lie</h1>
        <PlayerCard players={this.state.players} />
        <PRABarChart data={{}} />
        <button onClick={this.getPlayerIds}>HELP MEEEEEE</button>
      </div>
    );
  }
}

export default App;
