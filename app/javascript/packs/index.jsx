import React from "react";
import ReactDom from "react-dom";
import ShowModules from "../components/ShowModules";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(
    <ShowModules />,
    document.body.appendChild(document.createElement("div"))
  )
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(
    <App />,
    // document.body.appendChild(document.createElement("div"))
    document.getElementById('root')
  )
});

// const root = document.getElementById("root");
// const initialState = { posts: JSON.parse(root.dataset.posts) };
// const store = createStore(reducers, initialState, middlewares)
