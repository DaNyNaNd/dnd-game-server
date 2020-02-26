import React from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../scenes/Home";

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
