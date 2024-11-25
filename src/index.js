// React core, dom, and browser router
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Project-specific imports
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
    <Router>
        <CurrentUserProvider>
            <ProfileDataProvider>
                <App />
            </ProfileDataProvider>
        </CurrentUserProvider>
    </Router>,
    document.getElementById("root")
);


reportWebVitals();
