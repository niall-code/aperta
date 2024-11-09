import axios from "axios";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useHistory } from "react-router-dom";

import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/SignUpLogInForm.module.css";
import appStyles from "../../App.module.css";


const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: ""
    });
    const {username, password1, password2} = signUpData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/login");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto mx-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>

                    <h1 className={styles.Header}>Sign Up</h1>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Username"
                                className={styles.Input}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password1"
                                value={password1}
                                placeholder="Password"
                                className={styles.Input}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="password2">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password2"
                                value={password2}
                                placeholder="Confirm password"
                                className={styles.Input}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Button
                            type="submit"
                            className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                        >
                            Sign Up
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}

                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>

                    <Link className={styles.Link} to="/login">
                        Already have an account? <span>Log In</span>
                    </Link>

                </Container>
            </Col>
        </Row>
    );
};


export default SignUpForm;
