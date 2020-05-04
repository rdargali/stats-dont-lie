import React from "react";
import "../style/PlayerCard.css";

const PlayerCard = ({ players }) => {
  const playerCardJSX = players.map((player) => (
    <div key={player.id} className="card">
      <i className="far fa-times-circle icon-4x" />
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
          Weight: {player.weight_pounds ? `${player.weight_pounds} lbs` : "n/a"}{" "}
        </p>
      </div>
    </div>
  ));

  return <div className="player-card-container">{playerCardJSX}</div>;
};

export default PlayerCard;
