// React core and hooks
import React, { useState } from "react";

// Third-party components
import Form from "react-bootstrap/Form";

// API requests
import { axiosRes } from "../../api/axiosDefaults";

// Styles
import styles from "../../styles/CommentCreateEditForm.module.css";


/**
 * A form component for user to edit an owned comment.
*/
function CommentEditForm(props) {
    const { id, comment_text, setShowEditForm, setComments } = props;
    const [formContent, setFormContent] = useState(comment_text);

    /**
     * Method to update form data when user types in input field.
    */
    const handleChange = (event) => {
        setFormContent(event.target.value);
    };

    /**
     * Method to submit form data.
     * 
     * Updates Comment instance with matching ID in database.
     * Updates state accordingly. Sets showEditForm to false.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/comments/${id}/`, {
                comment_text: formContent.trim(),
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? {
                            ...comment,
                            comment_text: formContent.trim(),
                            changed_at: "now",
                        }
                        : comment;
                }),
            }));
            setShowEditForm(false);
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="pr-1">
                <Form.Control
                    className={styles.Form}
                    as="textarea"
                    value={formContent}
                    onChange={handleChange}
                    rows={2}
                />
            </Form.Group>

            <div className="text-right">
                <button
                    className={styles.Button}
                    onClick={() => setShowEditForm(false)}
                    type="button"
                >
                    Cancel
                </button>
                <button
                    className={styles.Button}
                    disabled={!comment_text.trim()}
                    type="submit"
                >
                    Save
                </button>
            </div>
        </Form>
    );
}


export default CommentEditForm;
