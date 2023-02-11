import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.js";
import { RouterProvider } from "react-router-dom";
import router from "./router/";
import { ContextProvider } from "./context/ContextProvider.jsx";
import "./assets/styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
