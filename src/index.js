import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { ProSidebarProvider } from "react-pro-sidebar";
import App from "./app";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ProSidebarProvider>
       <App />
      </ProSidebarProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
