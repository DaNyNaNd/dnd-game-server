import React from "react";
import { MapList } from "./MapList";
import { maps } from "../mockData/maps.js";

const Sidebar = (props: any) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", flex: 1 }}
      id="sidebar"
    >
      <div className="sidebar-header">
        <h1>Campaign</h1>
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

      <ul className="list-unstyled CTAs">
        <li>
          <a href="#" className="download">
            Block 1
          </a>
        </li>
        <li>
          <a href="#" className="article">
            Block 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
