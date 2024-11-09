import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleLogOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const loggedOutNav = <>
        <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-user-plus"></i>Sign Up
        </NavLink>
        <NavLink to="/login" className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-door-open"></i>Log In
        </NavLink>
    </>;

    const loggedInNav = <>
        <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-palette"></i>My Content
        </NavLink>
        <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-face-smile"></i>Liked
        </NavLink>
        <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-users"></i>Followed
        </NavLink>
        <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-ban"></i>Blocked
        </NavLink>

        {currentUser?.is_staff &&
            <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
                <i className="fa-solid fa-triangle-exclamation"></i>Suspicious
            </NavLink>
        }

        <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-circle-user"></i>Profile
        </NavLink>
        <NavLink to="/" onClick={handleLogOut} className={styles.NavLink} activeClassName={styles.Active}>
            <i class="fa-solid fa-door-closed"></i>Log Out
        </NavLink>
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

                        <NavLink to="/" className={styles.NavLink} activeClassName={styles.Active}>
                            <i class="fa-solid fa-globe"></i>Public Feed
                        </NavLink>

                        {currentUser ? loggedInNav : loggedOutNav}

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};


export default NavBar;