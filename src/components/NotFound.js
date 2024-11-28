import React from "react";

import Asset from "./Asset";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";


/**
 * NotFound component uses Asset component to display
 * no-results.png when no matching content found, or
 * a message when a URL does not point to a real page.
*/
const NotFound = () => {
    return (
        <div className={styles.NotFound}>
            <Asset
                src={NoResults}
                message={`Sorry, the page you're looking for doesn't exist`}
            />
        </div>
    );
};


export default NotFound;
