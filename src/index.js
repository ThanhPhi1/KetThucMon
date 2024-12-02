// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Nhập khẩu App
import "./styles.css"; // Nhập khẩu styles.css

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
