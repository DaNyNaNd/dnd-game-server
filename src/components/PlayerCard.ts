import React from "react";

const PlayerCard = props => (
  <div className="card card-inverse text-white">
    <div className="card-body player-card">
      <h4 className="card-title">{props.name}</h4>
      <p className="card-text">
        Lvl {props.level} | {props.race} | {props.playerclass}
      </p>
    </div>
  </div>
);

export default PlayerCard;
