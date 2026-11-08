import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Demos from "./pages/Demos";
import { initTheme } from "./lib/theme";
import "./styles/index.css";

initTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Demos />
  </StrictMode>
);
