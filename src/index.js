import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "normalize.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
