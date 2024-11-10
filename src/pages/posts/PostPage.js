import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";


function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });
    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: post }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                ]);
                setPost({ results: [post] });
                console.log(post);
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <Col className="mx-auto py-2 p-0 p-lg-2" lg={8}>
                <p>Post component</p>
                <Container className={appStyles.Content}>Comments</Container>
            </Col>
        </Row>
    );
}


export default PostPage;