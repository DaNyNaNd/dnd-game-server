import React from "react";
import { MapList } from "./MapList";
import { maps } from "../mockData/maps.js";

interface Map {
  id: number;
  name: string;
  src: string;
}

interface Props {
  selectMap: React.Dispatch<React.SetStateAction<Map | undefined>>;
  selectedMap: Map | undefined;
  handleShowModal: () => void;
}

const Sidebar = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        margin: "10px",
      }}
      id="sidebar"
    >
      <div className="sidebar-header">
        <h1>Lost Mine of Phandelver</h1>
      </div>
      <div className="pt-3 mx-3">
        <h3>Maps:</h3>
        <MapList mapList={maps} selectMap={props.selectMap} />
        <p onClick={props.handleShowModal} className="text-muted">
          Add New Map
        </p>
      </div>
      <ul className="list-unstyled components">
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="http://teamtaban.us/campaign.php">Players</a>
        </li>
      </ul>
      {props.selectedMap && (
        <div>
          <hr />
          <div>This is where the map properties go</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
