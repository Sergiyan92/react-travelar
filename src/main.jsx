import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { authService, TOKEN_KEY } from "./api/authService/index.js";
import "./i18n.js";
const token = localStorage.getItem(TOKEN_KEY);

if (token) {
  authService.setToken(token);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
