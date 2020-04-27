import React from "react";
import { Line } from "react-chartjs-2";

const TrueShootingLine = ({ players }) => {
  const datasets = players.map((player) => ({
    label: `${player.first_name} ${player.last_name}`,
    data: [0.1, 0.3, 0.1, 0.6, 0.7, 0.9, 0.3, 0.4, 1, 0.45],
  }));

  console.log(datasets);
  const data = {
    //Bring in data
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
