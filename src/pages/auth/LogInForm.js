// React core, hooks, and routing
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// HTTP client
import axios from "axios";

// Third-party components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// Project-specific imports
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

// Styles
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/SignUpLogInForm.module.css";


/**
 * A form component for users to log in.
*/
function LogInForm() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect("loggedIn");

    const [logInData, setLogInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = logInData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    /**
     * Method to submit the login form. Sets currentUser state
     * and saves a refreshable JWT token that can extend login period.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", logInData);
            setCurrentUser(data.user);
            setTokenTimestamp(data);
            history.goBack();
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    /**
     * Method to update login data when user types in input fields.
    */
    const handleChange = (event) => {
        setLogInData({
            ...logInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto mx-auto p-0 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>

                    <h1 className={styles.Header}>Log In</h1>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                className={styles.Input}
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                className={styles.Input}
                                value={password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Button
                            className={`${btnStyles.Button}
                                ${btnStyles.Wide}
                                ${btnStyles.Bright}`
                            }
                            type="submit"
                        >
                            Log In
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx}
                                variant="warning" className="mt-3"
                            >
                                {message}
                            </Alert>
                        ))}

                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>

                    <Link
                        className={styles.Link}
                        to="/signup"
                        aria-label="Go to signup page"
                    >
                        Don't have an account yet? <span>Sign Up</span>
                    </Link>

                </Container>
            </Col>
        </Row>
    );
}


export default LogInForm;
