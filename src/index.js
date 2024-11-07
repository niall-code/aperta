import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>

        <Router>
            <CurrentUserProvider>
                <App />
            </CurrentUserProvider>
        </Router>

    </React.StrictMode>
);


reportWebVitals();
