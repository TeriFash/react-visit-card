import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter  } from "react-router-dom";
import App from "./App";
// import './App.css';
import "./styles/main.scss";
import * as serviceWorker from "./serviceWorker";

serviceWorker.unregister();

const render = Component => {
  return ReactDOM.render(
  <BrowserRouter>
    <Component />
  </BrowserRouter>,
  document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}