import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Universities from "../components/universities/Universities";
import Department from "../components/Department";
import Module from "../components/Module"
import Review from "../components/Review"

export default (
  <Router history>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path ="universities" exact component = {Universities} /> */}
      <Route path="/universities" exact component={Universities} />
      <Route path="/universities/:id" exact component={Department} />
      <Route path="/departments/:id" exact component={Module} />
      <Route path="/mods/:id" exact component={Review} />
    </Switch>
  </Router>
);
