import React from "react";
import { getPlayerInfo } from "../utils/helpers.js";

interface Props {
  level: number;
  name: string;
  playerClass: string;
  race: string;
}

export const PlayerCard = (props: Props) => {
  getPlayerInfo();

  return (
    <div className="card card-inverse text-white">
      <div className="card-body player-card">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">
          Lvl {props.level} | {props.race} | {props.playerClass}
        </p>
      </div>
    </div>
  );
};
