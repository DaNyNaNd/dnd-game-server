import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import MapModal from "./MapModal";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [selectedMap, setSelectedMap] = useState({ id: 0, name: "", src: "" });
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Sidebar selectMap={setSelectedMap} handleShowModal={handleShowModal} />
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-md-8">
              <img
                src={selectedMap.src}
                className="img-fluid"
                alt={selectedMap.name}
              />
            </div>
          </div>
        </header>
      </div>
      <MapModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Home;
