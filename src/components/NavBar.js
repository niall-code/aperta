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
        <i className="fas fa-home"></i>Feed
    </NavLink>
    <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
        <i className="fas fa-user-plus"></i>Sign Up
    </NavLink>
    <NavLink to="#" className={styles.NavLink} activeClassName={styles.Active}>
        <i className="fas fa-sign-in-alt"></i>Log In
    </NavLink>
</>;


const loggedInNav = <>
    <NavLink className={styles.NavLink} activeClassName={styles.Active}>
        <i className="fas fa-home"></i>Feed
    </NavLink>
    <NavLink>
        <i className="fas fa-home"></i>My Content
    </NavLink>
    <NavLink>
        <i className="fas fa-home"></i>Liked
    </NavLink>
    <NavLink>
        <i className="fas fa-home"></i>Followed
    </NavLink>
    <NavLink>
        <i className="fas fa-home"></i>Blocked
    </NavLink>

    {/* {isSuperuser &&
    <NavLink>
        <i className="fas fa-home"></i>Suspicious
    </NavLink>
    } */}

    <NavLink>
        <i className="fas fa-home"></i>Profile
    </NavLink>
    <NavLink>
        <i className="fas fa-home"></i>Log Out
    </NavLink>
</>;


const NavBar = () => {
    const currentUser = useCurrentUser();
    // const setCurrentUser = useSetCurrentUser();

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>

                <Navbar.Brand>
                    <img src={logo} alt="logo" height="120" />
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