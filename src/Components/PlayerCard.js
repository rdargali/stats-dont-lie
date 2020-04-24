import React from "react";
import "../style/PlayerCard.css";

export default function PlayerCard() {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>LeBron James</b>
        </h4>
        <p>Position: PF</p>
        <p>Team: LAL</p>
        <p>Height: 6'8"</p>
        <p>Weight: 245 lbs</p>
      </div>
    </div>
  );
}
