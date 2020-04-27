import React from "react";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";
import "../style/SeasonAvgGrid.css";

const SeasonAvgGrid = ({ player }) => {
  const columns = [
    // { key: "player", name: "Player" },
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
      // player: `player`,
      gp: `${player.games_played}`.replace(/^0+/, ""),
      pts: `${player.pts}`.replace(/^0+/, ""),
      reb: `${player.reb}`.replace(/^0+/, ""),
      ast: `${player.ast}`.replace(/^0+/, ""),
      stl: `${player.stl}`.replace(/^0+/, ""),
      blk: `${player.blk}`.replace(/^0+/, ""),
      to: `${player.turnover}`.replace(/^0+/, ""),
      fgm: `${player.fgm}`.replace(/^0+/, ""),
      fga: `${player.fga}`.replace(/^0+/, ""),
      fgp: `${player.fg_pct}`.replace(/^0+/, ""),
      ftm: `${player.ftm}`.replace(/^0+/, ""),
      fta: `${player.fta}`.replace(/^0+/, ""),
      ftp: `${player.ft_pct}`.replace(/^0+/, ""),
      tpm: `${player.fg3m}`.replace(/^0+/, ""),
      tpa: `${player.fg3a}`.replace(/^0+/, ""),
      tpp: `${player.fg3_pct}`.replace(/^0+/, ""),
    },
  ];

  return (
    <div className="grid-container">
      <h4>{`${player.first_name} ${player.last_name}`}</h4>
      <DataGrid
        columns={columns}
        rows={rows}
        height={72}
        enableCellAutoFocus={false}
      />
    </div>
  );
};

export default SeasonAvgGrid;
