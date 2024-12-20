// React core, hooks, and routing
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Third-party components
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InfiniteScroll from "react-infinite-scroll-component";

// Project-specific imports

// API requests and utilities
import { axiosReq } from "../../api/axiosDefaults";
import { fetchMoreData } from "../../utils/utils";

// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// Components
import Post from "./Post";
import Comment from "../comments/Comment";
import CommentCreateForm from "../comments/CommentCreateForm";
import Asset from "../../components/Asset";

// Styles
import appStyles from "../../App.module.css";


/**
 * Displays an individual post and any associated comments.
*/
function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_picture = currentUser?.profile_picture;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        let isMounted = true;

        /**
         * Gets details of a Post instance
         * and any related Comment instances.
         * 
         * Uses fetched data to set state.
        */
        const handleMount = async () => {
            try {
                const [{ data: post }, { data: comments }] = await Promise.all([
                    axiosReq.get(`/posts/${id}/`),
                    axiosReq.get(`/comments/?commented_on_post=${id}`)
                ]);

                if (isMounted) {
                    setPost({ results: [post] });
                    setComments(comments);
                }
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();

        return () => {
            isMounted = false;
        };    
    }, [id]);

    return (
        <Row className="h-100">
            <Col className="mx-auto py-2 p-0 p-lg-2" lg={8}>
                <Post {...post.results[0]} setPosts={setPost} postPage />
                <Container className={appStyles.Content}>
                    {currentUser ? (
                        <CommentCreateForm
                            profile_id={currentUser.profile_id}
                            profilePicture={profile_picture}
                            commented_on_post={id}
                            setPost={setPost}
                            setComments={setComments}
                        />
                    ) : comments.results.length ? (
                        "Comments"
                    ) : null}
                    {comments.results.length ? (
                        <InfiniteScroll
                            children={comments.results.map((comment) => (
                                <Comment
                                    key={comment.id}
                                    {...comment}
                                    setPost={setPost}
                                    setComments={setComments}
                                />
                            ))}
                            dataLength={comments.results.length}
                            loader={<Asset spinner />}
                            hasMore={!!comments.next}
                            next={() => fetchMoreData(comments, setComments)}
                        />
                    ) : currentUser ? (
                        <span>No comments yet, be the first to comment!</span>
                    ) : (
                        <span>No comments... yet</span>
                    )}
                </Container>
            </Col>
        </Row>
    );
}


export default PostPage;