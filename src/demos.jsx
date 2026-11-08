import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Demos from "./pages/Demos";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Demos />
  </StrictMode>
);
