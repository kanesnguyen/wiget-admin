
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import { Provider } from "react-redux";
import store from './store';
const container = document.getElementById("root");
const root = createRoot(container);
const theme = {
  ptBr: {
    Polaris: {
      color: {
        success: 'red',
      },
    },
  },
};

root.render(
  <Provider store={store}>
    <AppProvider i18n={en}  theme={theme} alwaysRenderCustomProperties={true}>
      <App />
    </AppProvider>
  </Provider>
);
