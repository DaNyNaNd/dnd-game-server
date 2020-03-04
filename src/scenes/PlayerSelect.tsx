import React from "react";
import ruins from "../assets/images/Ruins_of_Thundertree-map.jpg";
import PlayerCard from "../components/PlayerCard.ts";

const PlayerSelect = ({
  name = "NO NAME",
  level = 0,
  race = "N/A",
  playerclass = "No Class Selected"
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row row-sm">
          {players.map(player => (
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
};

export default PlayerSelect;
