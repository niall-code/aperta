// React core, hooks, and routing
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// Third-party components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

// Project-specific imports
import { axiosReq } from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser
} from "../../contexts/CurrentUserContext";

// Styles
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";


/**
 * A form component for a user to change their profile picture.
*/
const ProfileEditForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();
    const [profileData, setProfileData] = useState({
        profile_picture: "",
    });
    const { profile_picture } = profileData;
    const [errors, setErrors] = useState({});

    useEffect(() => {

        let isMounted = true;

        /**
         * Fetches the initial profile picture.
        */
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const { data } = await axiosReq.get(`/profiles/${id}/`);
                    const { profile_picture } = data;

                    if (isMounted) {
                        setProfileData({ profile_picture });
                    }

                } catch (err) {
                    // console.log(err);

                    if (isMounted) {
                        history.push("/");
                    }

                }
            } else {

                if (isMounted) {
                    history.push("/");
                }

            }
        };
        handleMount();

        return () => {
            isMounted = false;
        };

    }, [currentUser, history, id]);

    /**
     * Method to submit form data.
     * 
     * Updates Profile instance in database.
     * Sets currentUser state accordingly.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        if (imageFile?.current?.files[0]) {
            formData.append("profile_picture", imageFile?.current?.files[0]);
        }
        try {
            const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_picture: data.profile_picture,
            }));
            history.goBack();
        } catch (err) {
            // console.log(err);
            setErrors(err.response?.data);
        }
    };

    // Buttons for the form

    const textFields = (
        <>
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
        </>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
                    <Container className={appStyles.Content}>
                        <Form.Group>

                            {profile_picture && (
                                <figure>
                                    <Image src={profile_picture} fluid />
                                </figure>
                            )}
                            {errors?.profile_picture?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <div>
                                <Form.Label
                                    className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>
                            <Form.File
                                id="image-upload"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        const file = e.target.files[0];
                                        setProfileData({
                                            ...profileData,
                                            profile_picture: URL.createObjectURL(file),
                                        });
                                    }
                                }}
                            />
                        </Form.Group>

                        <div className="d-md-none">{textFields}</div>

                    </Container>
                </Col>
                <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
};


export default ProfileEditForm;
