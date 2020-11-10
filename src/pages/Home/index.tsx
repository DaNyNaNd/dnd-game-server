import React, { useState } from "react";
import MapModal from "./MapModal";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [selectedMap, setSelectedMap] = useState({ id: 0, name: "", src: "" });
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar selectMap={setSelectedMap} handleShowModal={handleShowModal} />
      <div
        style={{ flex: 6, margin: "auto", overflow: "none" }}
        className="App"
      >
        <header className="App-header">
          <div className="row">
            <div className="col-md-8">
              <img
                src={selectedMap.src}
                className="img-fluid"
                alt={selectedMap.name}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </header>
      </div>
      <MapModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Home;
