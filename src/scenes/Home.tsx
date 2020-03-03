import React from "react";
import ruins from "../assets/images/Ruins_of_Thundertree-map.jpg";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-md-8">
            <img src={ruins} className="img-fluid" alt="Ruins of Thundertree" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;