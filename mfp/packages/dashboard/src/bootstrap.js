import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devROOT = document.querySelector("#_dashboard-dev-root");
  if (devROOT) {
    mount(devROOT);
  }
}

export { mount };
