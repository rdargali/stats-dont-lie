import React from "react";
import { Bar } from "react-chartjs-2";

const PRABarChart = (props) => {
  const chartData = {
    labels: [`one`, `two`, `three`, `four`, `five`],
    datasets: [
      {
        label: ["Points"],
        data: [856, 789, 1011, 123, 415],
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
