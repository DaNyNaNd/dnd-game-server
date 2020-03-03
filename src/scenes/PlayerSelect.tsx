import React from "react";
import ruins from "../assets/images/Ruins_of_Thundertree-map.jpg";


const PlayerSelect = ({name= "NO NAME", level = 0, race= "N/A", playerclass="No Class Selected"}) => {
    return (
        <div className="App">
            <header className="App-header">
        <div className="row row-sm">
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-4">
                        <div className="card card-inverse text-white">
                                <div className="card-body player-card">
                                    <h4 className="card-title">{name}</h4>
                                    <p className="card-text">Lvl {level} | {race} | {playerclass}</p>
                                </div>
                  </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-4">
                        <div className="card bg-dark text-white">
                            <div className="card-body player-card">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">Lvl {level} | {race} | {playerclass}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-4">
                        <div className="card bg-dark text-white">
                            <div className="card-body player-card">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">Lvl {level} | {race} | {playerclass}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-4">
                        <div className="card bg-dark text-white">
                            <div className="card-body player-card">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">Lvl {level} | {race} | {playerclass}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-4">
                        <div className="card bg-dark text-white">
                            <div className="card-body player-card">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">Lvl {level} | {race} | {playerclass}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-4 mb-4">
                        <div className="card bg-dark text-white">
                            <div className="card-body player-card">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">Lvl {level} | {race} | {playerclass}</p>
                            </div>
                        </div>
                    </div>
                </div>
      </header>
    </div>
    );
};

export default PlayerSelect;

