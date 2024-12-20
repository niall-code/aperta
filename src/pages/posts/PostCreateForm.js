// React core, hooks, and routing
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

// Third-party components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

// Project-specific imports

// API requests and utilities
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

// Components
import Asset from "../../components/Asset";

// Local images
import Upload from "../../assets/upload.png";

// Styles
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/PostCreateEditForm.module.css";


/**
 * A form component for user to create a post.
*/
function PostCreateForm() {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        title: "",
        post_text: "",
        image: "",
    });
    const { title, post_text, image } = postData;

    const imageInput = useRef(null);
    const history = useHistory();

    /**
     * Method to update form's data when input fields' contents changed.
    */
    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    /**
     * Dedicated method to update form's data
     * when changes to the input for an image.
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
     * Method to submit form data.
     * 
     * Creates an instance of Post in database.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("post_text", post_text);
        if (imageInput.current?.files.length) {
            formData.append("image", imageInput.current.files[0]);
        }
        try {
            const { data } = await axiosReq.post("/posts/", formData);
            history.push(`/posts/${data.id}`);
        } catch (err) {
            // console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    // Textual input fields for post creation form
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
                <Form.Label>Text of Post</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={8}
                    name="post_text"
                    value={post_text}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.post_text?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
            >
                Cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                Create
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
                            {image ? (
                                <>
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
                                </>
                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >
                                    <Asset
                                        src={Upload}
                                        message="Click or tap to upload an image"
                                    />
                                </Form.Label>
                            )}
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


export default PostCreateForm;
