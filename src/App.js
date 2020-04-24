import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PRABarChart from "./Components/PRABarChart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      barChartData: {
        labels: ["Lebron", "Giannis", "Demar", "Steph", "Luka", "Russell"],
        datasets: [
          {
            label: ["Points"],
            data: [923, 856, 789, 1011, 123, 415],
            backgroundColor: "red",
            borderColor: "black",
            borderWidth: "1",
            // hoverBackgroundColor: "grey",
            // order: 10,
          },
          {
            label: ["Rebounds"],
            data: [92, 85, 78, 101, 13, 41],
            backgroundColor: "green",
            borderColor: "black",
            borderWidth: "1",
            // hoverBackgroundColor: "grey",
            // order: 10,
          },
          {
            label: ["Assists"],
            data: [82, 75, 68, 71, 30, 71],
            backgroundColor: "yellow",
            borderColor: "black",
            borderWidth: "1",
            // hoverBackgroundColor: "grey",
            // order: 10,
          },
        ],
      },
    };
  }
  render() {
    const allPlayers = `https://www.balldontlie.io/api/v1/players?page=1`;
    return (
      <div className="App">
        <h1>Stats Don't Lie</h1>
        <PRABarChart data={this.state.barChartData} />
      </div>
    );
  }
}

export default App;
