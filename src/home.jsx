import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import { initTheme } from "./lib/theme";
import "./styles/index.css";

initTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
