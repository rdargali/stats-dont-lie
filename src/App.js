import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import { Doughnut } from "react-chartjs-2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hello: "world",
    };
  }
  render() {
    const allPlayers = `https://www.balldontlie.io/api/v1/players?page=1`;
    return (
      <div className="App">
        <h1>{this.state.hello}</h1>
        <Doughnut />
      </div>
    );
  }
}

export default App;
