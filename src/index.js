import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <CurrentUserProvider>
                <App />
            </CurrentUserProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);


reportWebVitals();
