import React from "react";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";

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
      gp: `${player.games_played}`,
      pts: `${player.pts}`,
      reb: `${player.reb}`,
      ast: `${player.ast}`,
      stl: `${player.stl}`,
      blk: `${player.blk}`,
      to: `${player.turnover}`,
      fgm: `${player.fgm}`,
      fga: `${player.fga}`,
      fgp: `${player.fg_pct}`,
      ftm: `${player.ftm}`,
      fta: `${player.fta}`,
      ftp: `${player.ft_pct}`,
      tpm: `${player.fg3m}`,
      tpa: `${player.fg3a}`,
      tpp: `${player.fg3_pct}`,
    },
  ];

  return (
    <div>
      <h4>{`${player.first_name} ${player.last_name}`}</h4>
      <DataGrid columns={columns} rows={rows} height={72} />
    </div>
  );
};

export default SeasonAvgGrid;
