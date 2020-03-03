import React from "react";
import { Button, Navbar } from 'react-bootstrap';

function Header() {
    return (

<nav className="navbar navbar-expand-lg navbar-light bg-light py-1">
    <div className="container-fluid">

        <button type="button" id="sidebarCollapse" className="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-align-justify"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                            <div className="form-row align-items-center">
                                <div className="col-auto my-1">
                                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Map</label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                </div>
                </li>
            </ul>
        </div>
    </div>
</nav>

    )
}


export default Header;