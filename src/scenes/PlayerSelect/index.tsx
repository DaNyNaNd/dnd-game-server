import React from "react";
import PlayerCard from "../../components/PlayerCard";

interface Player {
  name: string;
  level: number;
  race: string;
  class: string;
}

interface Props {
  players: Array<Player>;
}

const PlayerSelect = (props: Props) => (
  <div className="App">
    <header className="App-header">
      <div className="row row-sm">
        {props.players.map((player: Player) => (
          <div className="col-sm-6 col-lg-4 col-xl-4 mb-4">
            <PlayerCard
              name={player.name}
              level={player.level}
              race={player.race}
              playerClass={player.class}
            />
          </div>
        ))}
      </div>
    </header>
  </div>
);

export default PlayerSelect;
