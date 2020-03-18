import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../scenes/Home";
import PlayerSelect from "../scenes/PlayerSelect";

const history = createBrowserHistory();

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
              name: "Arneth Brackenford",
              level: 1,
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
