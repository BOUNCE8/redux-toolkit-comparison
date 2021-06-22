import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { store } from './redux-original'
import store from './redux-tool-kit';
import { Provider } from "react-redux";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root"));
