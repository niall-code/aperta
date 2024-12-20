// React core, hooks, and routing
import React from "react";
import { Link, useHistory } from "react-router-dom";

// Third-party components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// Project-specific imports
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";

// Styles
import styles from "../../styles/Post.module.css";


/**
 * Used by PostsPage and PostPage component-based pages,
 * corresponding to API's PostList and PostDetail views.
 * 
 * Includes methods to edit and delete the post and to
 * create and destroy likes.
*/
const Post = (props) => {

    // Destructured props
    const {
        id,
        owner,
        profile_id,
        profile_picture,
        comments_count,
        likes_count,
        like_id,
        title,
        post_text,
        image,
        changed_at,
        green_listed,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();

    // True if current user owns the post
    const is_owner = currentUser?.username === owner;

    const history = useHistory();

    /**
     * Updates the Post instance with matching ID in database.
    */
    const handleEdit = () => {
        history.push(`/posts/${id}/edit`);
    };

    /**
     * Deletes the Post instance with matching ID from database.
    */
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${id}/`);
            history.goBack();
        } catch (err) {
            // console.log(err);
        }
    };

    /**
     * Seeks confirmation of user intention to delete post.
     * If confirmed, calls handleDelete.
    */
    const confirmDelete = () => {
        let answer = window.confirm("Are you sure you want to delete this post?");
        if (answer) {
            handleDelete();
        }
    };

    /**
     * Creates a Like instance in database,
     * associated with a Post instance.
     * 
     * Updates state accordingly.
    */
    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { liked_post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    /**
     * Removes a specific Like instance from database.
     * Updates state accordingly.
    */
    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">

                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_picture} height={55} />
                        {owner}
                    </Link>

                    <div className="d-flex align-items-center">
                        <span>{changed_at}</span>

                        {is_owner && postPage && (
                            <MoreDropdown
                                handleEdit={handleEdit}
                                handleDelete={confirmDelete}
                            />
                        )}

                    </div>
                </Media>
            </Card.Body>

            <Link to={`/posts/${id}`}>
                {image && <Card.Img src={image} alt={title} />}
            </Link>

            <Card.Body>

                <Link to={`/posts/${id}`} className={styles.Link}>
                    {title && <Card.Title className="text-center">
                        {title}</Card.Title>
                    }
                </Link>

                {post_text && <Card.Text>{post_text}</Card.Text>}

                <div className={styles.PostBar}>

                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>
                                You can't like your own post!</Tooltip>
                            }
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>

                    ) : like_id ? (
                        <span onClick={handleUnlike}>
                            <i className={`fas fa-heart ${styles.Heart}`} />
                        </span>

                    ) : currentUser ? (
                        <span onClick={handleLike}>
                            <i className={`far fa-heart ${styles.HeartOutline}`} />
                        </span>

                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to like posts!</Tooltip>}
                        >
                            <i className="far fa-heart" />
                        </OverlayTrigger>
                    )}

                    {likes_count}
                    <i className="far fa-comments" />
                    {comments_count}

                </div>

                <div>
                    {currentUser && !green_listed &&
                        <Link to={`/report/${id}`}>
                            <Button
                                variant="danger"
                                size="sm"
                            >
                                Report
                            </Button>
                        </Link>
                    }
                </div>

            </Card.Body>
        </Card>
    );
};


export default Post;
