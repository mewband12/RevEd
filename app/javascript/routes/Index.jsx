import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowModules from "../components/show_module";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={ShowModules} />
    </Switch>
  </Router>
);
