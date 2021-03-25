import React from "react";
import ReactDOM from "react-dom";
import exports from "webpack";

const mount = (el) => {
  ReactDOM.render(<h1>Hi there</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const devROOT = document.querySelector("#_marketing-dev-root");
  if (devROOT) {
    mount(devROOT);
  }
}

export { mount };
