import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PromptKits from "./pages/PromptKits";
import { initTheme } from "./lib/theme";
import "./styles/index.css";

initTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PromptKits />
  </StrictMode>
);
