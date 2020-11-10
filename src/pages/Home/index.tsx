import React, { useState } from "react";
import MapModal from "./MapModal";
import Sidebar from "../../components/Sidebar";

interface Map {
  id: number;
  name: string;
  src: string;
}

const Home = () => {
  const [selectedMap, setSelectedMap] = useState<Map>();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        selectMap={setSelectedMap}
        selectedMap={selectedMap}
        handleShowModal={handleShowModal}
      />
      <div style={{ flex: 6, margin: "auto", overflow: "none" }}>
        <img
          src={selectedMap?.src}
          className="img-fluid"
          alt={selectedMap?.name}
          style={{ width: "100%" }}
        />
      </div>
      <MapModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Home;
