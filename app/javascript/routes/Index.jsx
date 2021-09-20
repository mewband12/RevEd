import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Universities from "../components/universities/Universities";
import University from "../components/university/University";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path ="universities" exact component = {Universities} /> */}
      <Route path="/universities" exact component={Universities} />
      <Route path="/universities/:id" exact component={University} />
    </Switch>
  </Router>
);
