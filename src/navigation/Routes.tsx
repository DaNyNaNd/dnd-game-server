import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../scenes/Home";
import PlayerSelect from "../scenes/PlayerSelect";

const history = createBrowserHistory();

var myHeaders = new Headers();
myHeaders.append("Cookie", "AWSELB=91B7AF47088C8EEF0700387ED7FBDD60BDAC14E1174D996A52F2AFD5A8107688845DB4CE7E30D75CD28F19037E8481E733B74ACD388429EF1B7796C3F1DA1E1735AE81752E; AWSELBCORS=91B7AF47088C8EEF0700387ED7FBDD60BDAC14E1174D996A52F2AFD5A8107688845DB4CE7E30D75CD28F19037E8481E733B74ACD388429EF1B7796C3F1DA1E1735AE81752E; _pxhd=6806a8697f99ec2de3555bf4526d2e2d176f5b99c647c3313ce7e8599801dbb3:93879a61-7a88-11ea-8a63-fd5e7a8b4196; Geo={%22region%22:%22TN%22%2C%22country%22:%22US%22%2C%22continent%22:%22NA%22}");

const playerJSON = fetch('https://www.dndbeyond.com/character/22698028/json', { method: 'GET', mode: 'no-cors', headers: myHeaders, redirect: 'follow' });

console.log(playerJSON);
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>

      <Route path="/player" component={PlayerSelect}>
        <PlayerSelect
          players={[
            {
              name: "Arneth Brackenford1",
              level: 3,
              race: "Dragonborn",
              class: "Ranger"
            },
            {
              name: "Arneth Brackenford2",
              level: 4,
              race: "Dragonborn",
              class: "Ranger"
            }
          ]}
        />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
