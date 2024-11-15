import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";


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
