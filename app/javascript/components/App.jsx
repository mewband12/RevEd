// import React, {Component} from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Universities from "../components/universities/Universities";
// import University from "../components/university/university";

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" component = {Universities}/>
//         <Route path="/universities/:id" component= {University}/>
//       </Switch>
//     </Router>
//   )
// }
// export default App

import React from "react";
import Routes from "../routes/Index";

export default props => <>{Routes}</>;
