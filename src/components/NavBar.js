import React from "react";
import Navbar from "react-bootstrap";
import Container from "react-bootstrap";
import Nav from "react-bootstrap";

import logo from "../assets/logo.png";


const loggedOutNav = <>
    <Nav.Link>
        <i className="fas fa-home"></i>Feed
    </Nav.Link>
    <Nav.Link>
        <i className="fas fa-user-plus"></i>Sign Up
    </Nav.Link>
    <Nav.Link>
        <i className="fas fa-sign-in-alt"></i>Log In
    </Nav.Link>
</>;


const loggedInNav = <>
    <Nav.Link>
        <i className="fas fa-home"></i>Feed
    </Nav.Link>
    <Nav.Link>
        <i className="fas fa-home"></i>My Content
    </Nav.Link>
    <Nav.Link>
        <i className="fas fa-home"></i>Liked
    </Nav.Link>
    <Nav.Link>
        <i className="fas fa-home"></i>Followed
    </Nav.Link>
    <Nav.Link>
        <i className="fas fa-home"></i>Blocked
    </Nav.Link>

    {isSuperuser &&
    <Nav.Link>
        <i className="fas fa-home"></i>Suspicious
    </Nav.Link>
    }

    <Nav.Link>
        <i className="fas fa-home"></i>Profile
    </Nav.Link>
    <Nav.Link>
        <i className="fas fa-home"></i>Log Out
    </Nav.Link>
</>;


const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top">
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