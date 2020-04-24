import React from "react";
import { Bar } from "react-chartjs-2";

const PRABarChart = ({ data }) => {
  return (
    <div>
      <Bar data={data} height={50} options={{ maintainAspectRatio: true }} />
    </div>
  );
};
export default PRABarChart;
