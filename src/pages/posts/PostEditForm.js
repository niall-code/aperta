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

// API requests
import { axiosReq } from "../../api/axiosDefaults";

// Styles
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/PostCreateEditForm.module.css";


/**
 * A form component for user to edit an owned post.
*/
function PostEditForm() {
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        title: "",
        post_text: "",
        image: "",
    });

    const { title, post_text, image } = postData;
    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        /**
         * Gets details of the post to be edited.
         * If user is not post owner, redirected to root page.
         * Otherwise, post data is set in state.
        */
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`);
                const { title, post_text, image, is_owner } = data;
                is_owner ? setPostData({ title, post_text, image }) : history.push("/");
            } catch (err) {
                // console.log(err);
            }
        };
        handleMount();
    }, [history, id]);

    /**
     * Updates postData state when user alters input field values.
    */
    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    /**
     * Dedicated method for updating postData state when image changes.
    */
    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    /**
     * Method for submitting form data.
     * 
     * Updates instance of Post with matching ID in database.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("post_text", post_text);
        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        // Revokes green list status, if applicable
        formData.append("green_listed", false);

        try {
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
        } catch (err) {
            // console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    // Textual fields for the post editing form
    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="post_text"
                    value={post_text}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                save
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <Form.Group className="text-center">
                            <figure>
                                <Image className={appStyles.Image} src={image} rounded />
                            </figure>
                            <div>
                                <Form.Label
                                    className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />
                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}


export default PostEditForm;
