
import React from "react";
import { clientInstance } from "./config/config";
import PageRouter from "./router/router";
import store from "./state/store/store";
function App() {
  // clientInstance.defaults.headers = {
  //   "Authorization": `${store.getState().user.token}`,
  // }
  return (
    <PageRouter />
  );
}

export default App;