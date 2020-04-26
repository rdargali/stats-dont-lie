import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Bar } from "react-chartjs-2";

const PRABarChart = ({ player, playerStats }) => {
  // const [playerIds, setPlayerIds] = useState([]);
  const [players, setPlayers] = useState([]);
  const [playerStat, setPlayerStat] = useState([]);

  useEffect(() => {
    // setPlayerIds(playerId);

    setPlayers(player);

    setPlayerStat(playerStats);
  }, []);

  const playerOne = players[0];
  const playerTwo = players[1];
  const playerThree = players[2];
  const playerFour = players[3];
  const playerFive = players[4];

  const PlayerOneStats = playerStat[0];
  const PlayerTwoStats = playerStat[1];
  const PlayerThreeStats = playerStat[2];
  const PlayerFourStats = playerStat[3];
  const PlayerFiveStats = playerStat[4];

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
          PlayerOneStats &&
            Math.round(PlayerOneStats.pts * PlayerOneStats.games_played),
          PlayerTwoStats &&
            Math.round(PlayerTwoStats.pts * PlayerTwoStats.games_played),
          PlayerThreeStats &&
            Math.round(PlayerThreeStats.pts * PlayerThreeStats.games_played),
          PlayerFourStats &&
            Math.round(PlayerFourStats.pts * PlayerFourStats.games_played),
          PlayerFiveStats &&
            Math.round(PlayerFiveStats.pts * PlayerFiveStats.games_played),
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
          PlayerOneStats &&
            Math.round(PlayerOneStats.reb * PlayerOneStats.games_played),
          PlayerTwoStats &&
            Math.round(PlayerTwoStats.reb * PlayerTwoStats.games_played),
          PlayerThreeStats &&
            Math.round(PlayerThreeStats.reb * PlayerThreeStats.games_played),
          PlayerFourStats &&
            Math.round(PlayerFourStats.reb * PlayerFourStats.games_played),
          PlayerFiveStats &&
            Math.round(PlayerFiveStats.reb * PlayerFiveStats.games_played),
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
          PlayerOneStats &&
            Math.round(PlayerOneStats.ast * PlayerOneStats.games_played),
          PlayerTwoStats &&
            Math.round(PlayerTwoStats.reb * PlayerTwoStats.games_played),
          PlayerThreeStats &&
            Math.round(PlayerThreeStats.reb * PlayerThreeStats.games_played),
          PlayerFourStats &&
            Math.round(PlayerFourStats.reb * PlayerFourStats.games_played),
          PlayerFiveStats &&
            Math.round(PlayerFiveStats.reb * PlayerFiveStats.games_played),
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
