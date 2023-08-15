import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Init VK Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(  <Router history={history}>
  <App history={history}/>
</Router>, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
