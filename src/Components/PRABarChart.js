import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Bar } from "react-chartjs-2";

const PRABarChart = ({ player, playerStat }) => {
  // const [playerIds, setPlayerIds] = useState([]);
  const [players, setPlayers] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    setPlayers(player);
    setPlayerStats(playerStat);
  }, [player, playerStat]);

  const playerOne = players[0];
  const playerTwo = players[1];
  const playerThree = players[2];
  const playerFour = players[3];
  const playerFive = players[4];

  const PlayerOneStats = playerStats[0];
  const PlayerTwoStats = playerStats[1];
  const PlayerThreeStats = playerStats[2];
  const PlayerFourStats = playerStats[3];
  const PlayerFiveStats = playerStats[4];

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
          PlayerOneStats && PlayerOneStats.pts,
          PlayerTwoStats && PlayerTwoStats.pts,
          PlayerThreeStats && PlayerThreeStats.pts,
          PlayerFourStats && PlayerFourStats.pts,
          PlayerFiveStats && PlayerFiveStats.pts,
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
          PlayerOneStats && PlayerOneStats.reb,
          PlayerTwoStats && PlayerTwoStats.reb,
          PlayerThreeStats && PlayerThreeStats.reb,
          PlayerFourStats && PlayerFourStats.reb,
          PlayerFiveStats && PlayerFiveStats.reb,
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
          PlayerOneStats && PlayerOneStats.ast,
          PlayerTwoStats && PlayerTwoStats.ast,
          PlayerThreeStats && PlayerThreeStats.ast,
          PlayerFourStats && PlayerFourStats.ast,
          PlayerFiveStats && PlayerFiveStats.ast,
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
      <h3>2019 Season Averages</h3>
      <Bar
        data={chartData}
        height={50}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
};

export default PRABarChart;
