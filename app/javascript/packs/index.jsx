import React from "react";
import ReactDom from "react-dom";
import ShowModules from "../components/ShowModules";
import App from "../components/App";
import NavBar from "../components/Navbar/NavBar";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#9E9E9E',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4a4a4a',
      main: '#ffffff',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  shadows: ["none"]
});


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

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>,
    // document.body.appendChild(document.createElement("div"))
    document.getElementById('navBar')
  )
});
// const root = document.getElementById("root");
// const initialState = { posts: JSON.parse(root.dataset.posts) };
// const store = createStore(reducers, initialState, middlewares)
