import React from "react";
import ReactDOM from "react-dom";

import "./firebase";
import App from "./App";
import "./scss/custom.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
