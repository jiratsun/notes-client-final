import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";

import App from "./App";

import "./styles.css";
import { fetchPages } from "./features/pages/pagesSlice";

const root = createRoot(document.getElementById("root"));

store.dispatch(fetchPages());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
