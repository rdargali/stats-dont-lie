import React from "react";
// import axios from "axios";
import { Bar } from "react-chartjs-2";
import "../style/PRABarChart.css";

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
        borderWidth: "1",
      },
      {
        label: ["Rebounds"],
        data: rebData,
        backgroundColor: "green",
        borderWidth: "1",
      },
      {
        label: ["Assists"],
        data: astData,
        backgroundColor: "yellow",
        borderWidth: "1",
      },
    ],
  };

  const options = {
    legend: {
      position: "right",
      // align: "start",
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
          categoryPercentage: 0.2,
          barPercentage: 1,
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            display: true,
            beginAtZero: true,
            min: 0,
            max: 35,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="container">
      <h4>Points, Rebounds, Assists</h4>
      <Bar data={chartData} height={50} options={options} />
    </div>
  );
};

export default PRABarChart;
