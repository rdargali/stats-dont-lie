import React from "react";
import "../style/PlayerCard.css";

export default function PlayerCard({ players }) {
  const playerCards = players.map((player) => {
    return (
      <div key="card" className="card">
        <div className="container">
          <h4>
            <b>
              {player.first_name} {player.last_name}
            </b>
          </h4>
          <p>Position: {player.position ? player.position : "n/a"}</p>
          <p>Team: {player.team.full_name}</p>
          <p>
            Height:{" "}
            {player.height_feet
              ? `${player.height_feet}' ${player.height_inches}"`
              : "n/a"}
          </p>
          <p>
            Weight:{" "}
            {player.weight_pounds ? `${player.weight_pounds} lbs` : "n/a"}{" "}
          </p>
        </div>
      </div>
    );
  });

  return <div className="player-card-container">{playerCards}</div>;
}
