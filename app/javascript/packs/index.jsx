import React from "react";
import ReactDom from "react-dom";
import ShowModules from "../components/ShowModules";
import App from "../components/App";
import Universities from "../components/universities/Universities";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(
    <Router >,
      <Route path ="/" component={App}/>
      {/* <App /> */}
    </Router>,
    document.body.appendChild(document.createElement('div')),
    // document.getElementById('root')
  )

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// });


// document.addEventListener("DOMContentLoaded", () => {
//   ReactDom.render(
//     <ShowModules />,
//     // document.body.appendChild(document.createElement("div"))
//     document.getElementById('root2')
//   )
// });

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDom.render(
//     <App />,
//     // document.body.appendChild(document.createElement("div"))
//     document.getElementById('root')
//   )
// });

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDom.render(
//     <Album />,
//     // document.body.appendChild(document.createElement("div"))
//     document.getElementById('Universities')
//   )
// });

// const root = document.getElementById("root");
// const initialState = { posts: JSON.parse(root.dataset.posts) };
// const store = createStore(reducers, initialState, middlewares)
