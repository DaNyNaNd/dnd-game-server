import React from "react";
import { Button, Navbar } from "react-bootstrap";
import MapList from './MapList';
import { maps } from '../mockData/maps.js';

const Sidebar = (props: any) => {
  
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h1>D&D Stuff</h1>
      </div>
      <div className="pt-3 mx-3">
        <h3>Maps:</h3>
        <MapList mapList={maps} selectMap={props.selectMap}/>
          <a href="#" className="text-muted">
            <small>(change)</small>
          </a>
      </div>
      <ul className="list-unstyled components">
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/player">Players</a>
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
    </nav>
  );
}

export default Sidebar;