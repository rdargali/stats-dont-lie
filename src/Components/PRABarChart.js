import React from "react";
// import axios from "axios";
import { Bar } from "react-chartjs-2";

const PRABarChart = ({ players }) => {
  const labels = players.map(
    (player) => `${player.first_name} ${player.last_name}`
  );

  const ptsData = players.map((player) => player.pts);
  const rebData = players.map((player) => player.reb);
  const astData = players.map((player) => player.ast);

  const chartData = {
    labels: labels,

    datasets: [
      {
        label: ["Points"],
        data: ptsData,
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: "1",
        // hoverBackgroundColor: "grey",
        // order: 10,
      },
      {
        label: ["Rebounds"],
        data: rebData,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: "1",
        // hoverBackgroundColor: "grey",
        // order: 10,
      },
      {
        label: ["Assists"],
        data: astData,
        backgroundColor: "yellow",
        borderColor: "black",
        borderWidth: "1",
        // hoverBackgroundColor: "grey",
        // order: 10,
      },
    ],
  };
  return (
    <div>
      <Bar
        data={chartData}
        height={50}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
};

export default PRABarChart;
