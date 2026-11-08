import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Work from "./pages/Work";
import { initTheme } from "./lib/theme";
import "./styles/index.css";

initTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Work />
  </StrictMode>
);
