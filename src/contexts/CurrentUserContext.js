// React hooks and routing
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

// HTTP client
import axios from "axios";

// API requests and utilities
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);


/**
 * Provides currentUser state and setCurrentUser method to descendants.
 * 
 * Imported and utilised in index.js, wrapping the App component.
*/
export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();

    /**
     * Gets user details and sets currentUser state from them.
    */
    const handleMount = async () => {
        try {
            const { data } = await axiosRes.get("dj-rest-auth/user/");
            setCurrentUser(data);
        } catch (err) {
            // console.log(err);
        }
    };

    /**
     * Calls handleMount when site loads.
    */
    useEffect(() => {
        handleMount();
    }, []);

    /**
     * When API contacted, attempt to refresh JWT token.
     * If tokens have expired, log out the user.
    */
    useMemo(() => {

        axiosReq.interceptors.request.use(
            async (config) => {
                if (shouldRefreshToken()) {
                    try {
                        await axios.post("/dj-rest-auth/token/refresh/");
                    } catch (err) {
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                history.push("/login");
                            }
                            return null;
                        });
                        removeTokenTimestamp();
                        return config;
                    }
                }
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        );

        axiosRes.interceptors.response.use(
            // If no error, simply return response
            (response) => response,
            async (err) => {
                if (err.response?.status === 401) {
                    try {
                        // Try refreshing token
                        await axios.post("/dj-rest-auth/token/refresh/");
                    } catch (err) {
                        setCurrentUser(prevCurrentUser => {
                            if (prevCurrentUser) {
                                // Redirect to sign-in page
                                history.push("/login");
                            }
                            // Sign out
                            return null;
                        });
                        removeTokenTimestamp();
                    }
                    // End interceptor
                    return axios(err.config);
                }
                return Promise.reject(err);
            }
        );

    }, [history]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};
