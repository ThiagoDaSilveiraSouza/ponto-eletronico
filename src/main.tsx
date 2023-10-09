import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";
import { ModalContainer } from "./components/index.ts";
import { MocDataProvider, ModalsContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <ModalsContextProvider>
        <MocDataProvider>
          <App />
          <ModalContainer />
        </MocDataProvider>
      </ModalsContextProvider>
    </Theme>
  </React.StrictMode>
);
