import React from "react";
import { Line } from "react-chartjs-2";
import "../style/TrueShootingLine.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const TrueShootingLine = ({ players }) => {
  //

  const colorsArray = ["orange", "blue", "green", "purple", "black"];

  const trueShootingDef =
    "In basketball, true shooting percentage is an advanced statistic that measures a player's efficiency at shooting the ball. It is intended to more accurately calculate a player's shooting efficiency than field goal percentage, free throw percentage, and three-point field goal percentage taken individually as all three are accounted for in its calculation. It is commonly abbreviated TS%. It is calculated as Points / [2 * (FGA + .44*FTA) ]";

  const datasets = players.map((player, index) => {
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
      borderColor: colorsArray[index],
      backgroundColor: colorsArray[index],
      borderWidth: 2,
      lineTension: 0.2,
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
      mode: "index",
      callbacks: {
        title: () => {
          return "True Shooting %";
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
      <h4>True Shooting % Over Last 10 Games</h4>
      <Tippy content={trueShootingDef} placement="bottom">
        <h6>
          What is True Shooting? &nbsp;
          <i className="fas fa-info-circle" />
        </h6>
      </Tippy>

      <Line data={data} options={options} />
    </div>
  );
};

export default TrueShootingLine;
