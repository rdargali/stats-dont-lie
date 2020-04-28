import React from "react";
import { Line } from "react-chartjs-2";

const TrueShootingLine = ({ players }) => {
  console.log(players);

  const datasets = players.map((player) => {
    let gamesArray = player.data.sort((a, b) => b.id - a.id);
    console.log(gamesArray);

    return {
      label: `${player.first_name} ${player.last_name}`,
      data: [],
    };
  });

  console.log(datasets);

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: datasets,
  };

  const options = {};

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default TrueShootingLine;
