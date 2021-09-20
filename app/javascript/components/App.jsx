import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Universities from "../components/universities/Universities";
import University from "../components/university/university";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {Universities}/>
        <Route exact path="/universities/:id" component= {University}/>
      </Switch>
    </Router>
  )
}
export default App
