import React from "react";
import "../style/PlayerCard.css";

const PlayerCard = ({ players, removePlayer }) => {
  const playerCardJSX = players.map((player) => (
    <div key={player.id} className="card">
      <i
        className="far fa-times-circle delete-icon"
        onClick={() => removePlayer(player.id)}
      />
      <div className="container">
        <strong>
          {player.first_name} {player.last_name}
        </strong>

        <br />
        <small>
          {player.team.full_name} - {player.position}
        </small>
      </div>
    </div>
  ));

  return <div className="player-card-container">{playerCardJSX}</div>;
};

export default PlayerCard;
