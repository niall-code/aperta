// React core, hooks, and routing
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Third-party components
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Project-specific imports
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import styles from "../../styles/CommentCreateEditForm.module.css";


/**
 * A form component for user to create a comment.
*/
function CommentCreateForm(props) {

    // Destructured props
    const {
        commented_on_post,
        setPost,
        setComments,
        profilePicture,
        profile_id
    } = props;

    const [comment_text, setContent] = useState("");

    /**
     * Method to update form data when user types in input field.
    */
    const handleChange = (event) => {
        setContent(event.target.value);
    };

    /**
     * Method to submit form data.
     * 
     * Creates Comment instance in database.
     * Updates state accordingly.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post("/comments/", {
                comment_text,
                commented_on_post,
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count + 1,
                    },
                ],
            }));
            setContent("");
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profilePicture} />
                    </Link>
                    <Form.Control
                        className={styles.Form}
                        placeholder="my comment..."
                        as="textarea"
                        value={comment_text}
                        onChange={handleChange}
                        rows={2}
                    />
                </InputGroup>
            </Form.Group>
            <button
                className={`${styles.Button} btn d-block ml-auto`}

                disabled={!comment_text.trim()}

                type="submit"
            >
                Comment
            </button>
        </Form>
    );
}


export default CommentCreateForm;
