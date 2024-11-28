// React core, hooks, and routing
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// Third-party components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// Project-specific imports
import { axiosRes } from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser
} from "../../contexts/CurrentUserContext";

// Styles
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";


/**
 * Form component for user to alter username.
*/
const UsernameForm = () => {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    useEffect(() => {
        if (currentUser?.profile_id?.toString() === id) {
            setUsername(currentUser.username);
        } else {
            history.push("/");
        }
    }, [currentUser, history, id]);

    /**
     * Method to submit form data.
     * 
     * Updates User instance in database.
     * Sets currentUser state accordingly.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put("/dj-rest-auth/user/", {
                username,
            });
            setCurrentUser((prevUser) => ({
                ...prevUser,
                username,
            }));
            history.goBack();
        } catch (err) {
            // console.log(err);
            setErrors(err.response?.data);
        }
    };

    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={6}>
                <Container className={appStyles.Content}>
                    <Form onSubmit={handleSubmit} className="my-2">
                        <Form.Group>
                            <Form.Label>Change username</Form.Label>
                            <Form.Control
                                placeholder="username"
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </Form.Group>
                        {errors?.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            onClick={() => history.goBack()}
                        >
                            Cancel
                        </Button>
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Blue}`}
                            type="submit"
                        >
                            Save
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};


export default UsernameForm;