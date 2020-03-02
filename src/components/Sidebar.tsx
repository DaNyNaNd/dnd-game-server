import React from "react";
import { Button, Navbar } from 'react-bootstrap';

function Sidebar() {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Sidebar</h3>
            </div>

            <ul className="list-unstyled components">
                <p>D&D Stuff</p>
                <li className="active">
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/player">Players</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <a href="#" className="download">Test Second 1</a>
                </li>
                <li>
                    <a href="#" className="article">Test Second 2</a>
                </li>
            </ul>
        </nav>

            )
}


export default Sidebar;