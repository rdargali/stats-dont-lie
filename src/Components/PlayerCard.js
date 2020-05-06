import React from "react";
import "../style/PlayerCard.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const PlayerCard = ({ players, removePlayer }) => {
  const playerCardJSX = players.map((player) => (
    <Tippy
      content={`${player.team.full_name} - ${player.position}`}
      key={player.id}
    >
      <div className="card">
        <i
          className="far fa-times-circle delete-icon"
          onClick={() => removePlayer(player.id)}
        />
        <div className="container">
          <small>
            {player.first_name} {player.last_name}
          </small>
        </div>
      </div>
    </Tippy>
  ));

  return <div className="player-card-container">{playerCardJSX}</div>;
};

export default PlayerCard;
