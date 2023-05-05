import React from "react";
import ReactDOM from "react-dom/client";
import User from "./views/User";
// import Shop from "./views/Shop";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
// import APICall from "./APICall";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <APICall /> */}
      {/* <Shop /> */}
      <User />
    </React.StrictMode>
  </Provider>
);
