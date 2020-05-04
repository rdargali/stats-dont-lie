import React from "react";
import { Line } from "react-chartjs-2";
import "../style/TrueShootingLine.css";

const TrueShootingLine = ({ players }) => {
  //

  const datasets = players.map((player) => {
    let gamesArray = player.data.sort((a, b) => b.id - a.id);

    return {
      label: `${player.first_name} ${player.last_name}`,
      data: [
        `${
          gamesArray[9].pts /
          (2 * (gamesArray[9].fga + 0.44 * gamesArray[9].fta))
        }`,
        `${
          gamesArray[8].pts /
          (2 * (gamesArray[8].fga + 0.44 * gamesArray[8].fta))
        }`,
        `${
          gamesArray[7].pts /
          (2 * (gamesArray[7].fga + 0.44 * gamesArray[7].fta))
        }`,
        `${
          gamesArray[6].pts /
          (2 * (gamesArray[6].fga + 0.44 * gamesArray[6].fta))
        }`,
        `${
          gamesArray[5].pts /
          (2 * (gamesArray[5].fga + 0.44 * gamesArray[5].fta))
        }`,
        `${
          gamesArray[4].pts /
          (2 * (gamesArray[4].fga + 0.44 * gamesArray[4].fta))
        }`,
        `${
          gamesArray[3].pts /
          (2 * (gamesArray[3].fga + 0.44 * gamesArray[3].fta))
        }`,
        `${
          gamesArray[2].pts /
          (2 * (gamesArray[2].fga + 0.44 * gamesArray[2].fta))
        }`,
        `${
          gamesArray[1].pts /
          (2 * (gamesArray[1].fga + 0.44 * gamesArray[1].fta))
        }`,
        `${
          gamesArray[0].pts /
          (2 * (gamesArray[0].fga + 0.44 * gamesArray[0].fta))
        }`,
      ],
      fill: false,
      borderColor: ["red", "green", "blue"], //index this
      borderWidth: 1.5,
      backgroundColor: ["red", "green", "blue"],
      lineTension: 0,
      pointHoverBackgroundColor: "pink",
    };
  });

  const data = {
    labels: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    datasets: datasets,
  };

  const options = {
    legend: {
      position: "right",
      // align: "start",
    },
    tooltips: {
      callbacks: {
        title: () => {
          return "Game Data";
        },
        label: (item, data) => {
          var datasetLabel = data.datasets[item.datasetIndex].label || "";
          var dataPoint = item.yLabel;
          return datasetLabel + ": " + (dataPoint * 100).toFixed(2) + "%";
        },
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "TS%",
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            max: 1,
          },
          //   gridLines: {
          //     color: "rgba(0, 0, 0, 0)",
          //   },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Games",
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
    },
  };

  return (
    <div className="container">
      <h4>Last 10 games true shooting percentage</h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default TrueShootingLine;
