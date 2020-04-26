import React from "react";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";

const SeasonAvgGrid = () => {
  const columns = [
    { key: "player", name: "Player" },
    { key: "gp", name: "GP" },
    { key: "pts", name: "Pts" },
    { key: "reb", name: "Reb" },
    { key: "ast", name: "Ast" },
    { key: "stl", name: "Stl" },
    { key: "blk", name: "Blk" },
    { key: "to", name: "TO" },
    { key: "fgm", name: "FGM" },
    { key: "fga", name: "FGA" },
    { key: "fgp", name: "FG%" },
    { key: "ftm", name: "FTM" },
    { key: "fta", name: "FTA" },
    { key: "ftp", name: "FT%" },
    { key: "tpm", name: "3PM" },
    { key: "tpa", name: "3PA" },
    { key: "tpp", name: "3P%" },
  ];

  const rows = [
    {
      player: "Lebron",
      gp: "82",
      pts: "82",
      reb: "82",
      ast: "82",
      stl: "82",
      blk: "82",
      to: "82",
      fgm: "82",
      fga: "82",
      fgp: "82",
      ftm: "82",
      fta: "82",
      ftp: "82",
      tpm: "82",
      tpa: "82",
      tpp: "82",
    },
  ];

  return (
    <div>
      <h3>2019 Season Averages</h3>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

export default SeasonAvgGrid;
