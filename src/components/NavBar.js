import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import { useCurrentUser } from "../contexts/CurrentUserContext";

import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";


const loggedOutNav = <>
    <NavLink to="/" className={styles.NavLink} activeClassName={styles.Active}>
        <i class="fa-solid fa-globe"></i>Public Feed
    </NavLink>
    <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
        <i class="fa-solid fa-user-plus"></i>Sign Up
    </NavLink>
    <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
        <i class="fa-solid fa-door-open"></i>Log In
    </NavLink>
</>;


const loggedInNav = <>
    <NavLink className={styles.NavLink} activeClassName={styles.Active}>
        <i class="fa-solid fa-globe"></i>Public Feed
    </NavLink>
    <NavLink>
        <i class="fa-solid fa-palette"></i>My Content
    </NavLink>
    <NavLink>
        <i class="fa-solid fa-face-smile"></i>Liked
    </NavLink>
    <NavLink>
        <i class="fa-solid fa-users"></i>Followed
    </NavLink>
    <NavLink>
        <i class="fa-solid fa-ban"></i>Blocked
    </NavLink>

    {/* {isSuperuser &&
    <NavLink>
        <i className="fas fa-home"></i>Suspicious
    </NavLink>
    } */}

    <NavLink>
        <i class="fa-solid fa-circle-user"></i>Profile
    </NavLink>
    <NavLink>
        <i class="fa-solid fa-door-closed"></i>Log Out
    </NavLink>
</>;


const NavBar = () => {
    const currentUser = useCurrentUser();
    // const setCurrentUser = useSetCurrentUser();

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>

                <Navbar.Brand>
                    <img src={logo} alt="logo" height="100" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-start">

                        {currentUser ? loggedInNav : loggedOutNav}

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};


export default NavBar;