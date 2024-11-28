// React core, hooks, and routing
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Third-party components
import Media from "react-bootstrap/Media";

// Project-specific imports

// API requests
import { axiosRes } from "../../api/axiosDefaults";

// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// Components
import CommentEditForm from "./CommentEditForm";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";

// Styles
import styles from "../../styles/Comment.module.css";


/**
 * Comment component. Used in PostPage component's return.
*/
const Comment = (props) => {

    // Destructured props
    const {
        profile_id,
        profile_picture,
        owner,
        changed_at,
        comment_text,
        id,
        setPost,
        setComments,
    } = props;

    // Comment editing form hidden by default
    const [showEditForm, setShowEditForm] = useState(false);

    const currentUser = useCurrentUser();

    // True if comment owner is current user
    const is_owner = currentUser?.username === owner;

    /**
     * Deletes a comment by ID and updates state accordingly.
    */
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch (err) { }
    };

    return (
        <>
            <hr />
            <Media>

                {/* Link to commenter's profile */}
                <Link to={`/profiles/${profile_id}`}>

                    {/* Commenter's avatar */}
                    <Avatar src={profile_picture} />

                </Link>

                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{changed_at}</span>

                    {/* Display comment_text OR CommentEditForm */}
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            profile_id={profile_id}
                            comment_text={comment_text}
                            profileImage={profile_picture}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{comment_text}</p>
                    )}

                </Media.Body>

                {/* Comment owner can access editing and deleting */}
                {is_owner && !showEditForm && (
                    <MoreDropdown
                        handleEdit={() => setShowEditForm(true)}
                        handleDelete={handleDelete}
                    />
                )}

            </Media>
        </>
    );
};


export default Comment;
