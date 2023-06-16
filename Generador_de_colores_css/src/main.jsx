import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextGlobalProvider } from "./context/ContextProvider.jsx";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <Notifications position="top-center" limit={1} zIndex={2000} />
        <App />
      </MantineProvider>
    </ContextGlobalProvider>
  </React.StrictMode>
);
