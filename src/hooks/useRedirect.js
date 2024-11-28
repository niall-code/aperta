// React hooks and routing
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

// HTTP client
import axios from "axios";


/**
 * Checks authentication status by trying to refresh JWT token.
 * 
 * Can be used to redirect an unauthenticated user away from
 * restricted pages.
*/
export const useRedirect = (userAuthStatus) => {
    const history = useHistory();
    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post("/dj-rest-auth/token/refresh/");
                // if user is logged in, the code below will run
                if (userAuthStatus === "loggedIn") {
                    history.push("/");
                }
            } catch (err) {
                // if user is not logged in, the code below will run
                if (userAuthStatus === "loggedOut") {
                    history.push("/");
                }
            }
        };
        handleMount();
    }, [history, userAuthStatus]);
};
