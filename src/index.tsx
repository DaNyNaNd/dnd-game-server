import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
ReactDOM.render(<Header />, document.getElementById("header"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();