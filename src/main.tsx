import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ServiceContext } from "./services/ServiceContext.tsx";
import { defaultServices } from "./services/container.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServiceContext.Provider value={defaultServices}>
      <App />
    </ServiceContext.Provider>
  </StrictMode>
);
