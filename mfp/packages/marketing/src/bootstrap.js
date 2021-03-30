import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

const mount = (el) => {
  const history = createMemoryHistory();

  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === "development") {
  const devROOT = document.querySelector("#_marketing-dev-root");
  if (devROOT) {
    mount(devROOT);
  }
}

export { mount };
