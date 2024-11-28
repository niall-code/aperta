// React core and routing
import React from "react";
import { NavLink } from "react-router-dom";

// HTTP client
import axios from "axios";

// Third-party components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Project-specific imports

// Utilities
import { removeTokenTimestamp } from "../utils/utils";

// Contexts
import {
    useCurrentUser,
    useSetCurrentUser
} from "../contexts/CurrentUserContext";

// Component
import Avatar from "./Avatar";

// Image and styles
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";


/**
 * Navigation bar component. Available links vary by user's
 * authentication and staff member statuses.
*/
const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    /**
     * Method to handle logout. Sets currentUser to null
     * and removes JWT token.
    */
    const handleLogOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };

    /**
     * Navigation links for unauthenticated site visitors.
    */
    const loggedOutNav = <>
        <NavLink
            exact to="/signup"
            className={styles.NavLink} activeClassName={styles.Active}
            aria-label="Go to signup page"
        >
            <i className="fa-solid fa-user-plus"
                aria-hidden="true"
            ></i>Sign Up
        </NavLink>

        <NavLink
            exact to="/login"
            className={styles.NavLink} activeClassName={styles.Active}
            aria-label="Go to login page"
        >
            <i className="fa-solid fa-door-open"
                aria-hidden="true"
            ></i>Log In
        </NavLink>
    </>;

    /**
     * Navigation links for authenticated users.
    */
    const loggedInNav = <>
        <NavLink
            exact to="/posts/create"
            className={styles.NavLink} activeClassName={styles.Active}
            aria-label="Go to post creation page"
        >
            <i className="fa-solid fa-palette"
                aria-hidden="true"
            ></i>Create Post
        </NavLink>

        <NavLink
            exact to="/liked"
            className={styles.NavLink} activeClassName={styles.Active}
            aria-label="Go to your liked posts page"
        >
            <i className="fa-solid fa-face-smile"
                aria-hidden="true"
            ></i>Liked
        </NavLink>

        <NavLink
            exact to="/followed"
            className={styles.NavLink} activeClassName={styles.Active}
            aria-label="Go to posts by people you follow"
        >
            <i className="fa-solid fa-users"
                aria-hidden="true"
            ></i>Followed
        </NavLink>

        {/* Staff-only navigation link to content moderation page. */}
        {currentUser?.is_staff &&
            <NavLink
                exact to="/suspicious"
                className={styles.NavLink} activeClassName={styles.Active}
                aria-label="Go to the content moderation page"
            >
                <i className="fa-solid fa-triangle-exclamation"
                    aria-hidden="true"
                ></i>Suspicious
            </NavLink>
        }

        <NavLink
            exact to={`/profiles/${currentUser?.profile_id}`}
            className={styles.NavLink} activeClassName={styles.Active}
            aria-label="Go to your profile page"
        >
            <i className="fa-solid fa-circle-user"
                aria-hidden="true"
            ></i>Profile
        </NavLink>

        {/* Calls handleLogOut method when clicked. */}
        <NavLink
            to="/"
            onClick={handleLogOut}
            className={styles.NavLink}
            aria-label="Log out, redirects to public feed"
        >
            <i className="fa-solid fa-door-closed"
                aria-hidden="true"
            ></i>Log Out
        </NavLink>

        {/* Imported Avatar component displays avatar and username. */}
        <Avatar
            src={currentUser?.profile_picture}
            text={currentUser?.username}
            height={40}
        />
    </>;

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>

                <Navbar.Brand>
                    <img src={logo} alt="logo" height="100" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-start">

                        <NavLink
                            exact to="/"
                            className={styles.NavLink} activeClassName={styles.Active}
                            aria-label="Go to public feed"
                        >
                            <i className="fa-solid fa-globe"
                                aria-hidden="true"
                            ></i>Public Feed
                        </NavLink>

                        {currentUser ? loggedInNav : loggedOutNav}

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};


export default NavBar;
