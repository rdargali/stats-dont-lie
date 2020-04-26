import React from "react";
// import axios from "axios";
import { Bar } from "react-chartjs-2";

const PRABarChart = ({ players }) => {
  // const [playerIds, setPlayerIds] = useState([]);

  const playerOne = players[0];
  const playerTwo = players[1];
  const playerThree = players[2];
  const playerFour = players[3];
  const playerFive = players[4];

  const chartData = {
    labels: [
      playerOne && `${playerOne.first_name} ${playerOne.last_name}`,
      playerTwo && `${playerTwo.first_name} ${playerTwo.last_name}`,
      playerThree && `${playerThree.first_name} ${playerThree.last_name}`,
      playerFour && `${playerFour.first_name} ${playerFour.last_name}`,
      playerFive && `${playerFive.first_name} ${playerFive.last_name}`,
    ],
    datasets: [
      {
        label: ["Points"],
        data: [
          playerOne && playerOne.pts,
          playerTwo && playerTwo.pts,
          playerThree && playerThree.pts,
          playerFour && playerFour.pts,
          playerFive && playerFive.pts,
        ],
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: "1",
        // hoverBackgroundColor: "grey",
        // order: 10,
      },
      {
        label: ["Rebounds"],
        data: [
          playerOne && playerOne.reb,
          playerTwo && playerTwo.reb,
          playerThree && playerThree.reb,
          playerFour && playerFour.reb,
          playerFive && playerFive.reb,
        ],
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: "1",
        // hoverBackgroundColor: "grey",
        // order: 10,
      },
      {
        label: ["Assists"],
        data: [
          playerOne && playerOne.ast,
          playerTwo && playerTwo.ast,
          playerThree && playerThree.ast,
          playerFour && playerFour.ast,
          playerFive && playerFive.ast,
        ],
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
