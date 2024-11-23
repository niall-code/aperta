import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { axiosReq, axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";


function ReportCreateForm() {

    const currentUser = useCurrentUser();
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const { id } = useParams();

    const [reportData, setReportData] = useState({
        post_id: "",
        post_title: "",
        post_text: "",
        post_image: "",
        reason: "",
        explanation: "",
    });

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/posts/${id}`, { signal });
                console.log(data);
                const post_id = parseInt(`${data.id}`);
                console.log(post_id);
                const post_title = `${data.title}`;
                console.log(post_title);
                const post_text = `${data.post_text}`;
                console.log(post_text);
                const post_image = `${data.image}`;
                console.log(post_image);

                setReportData((reportData) => ({
                    ...reportData,
                    post_id: post_id,
                    post_title: post_title,
                    post_text: post_text,
                    post_image: post_image,
                    reason: 0,
                    explanation: "",
                }));

            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
        return () => {
            abortController.abort();
        };
    }, [id]);

    const handleChange = (event) => {

        if (event.target.name==='reason') {

            const numReason = parseInt(event.target.value);

            setReportData((reportData) => ({
                ...reportData,
                [event.target.name]: numReason,

            }))

        } else if (event.target.name==='explanation') {

            setReportData((reportData) => ({
                ...reportData,
                [event.target.name]: event.target.value,

            }))

        }

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Data being sent to the server:", reportData);

        try {

            await axiosReq.post("/suspicious/", reportData);

            await axiosReq.patch(`/posts/${reportData.post_id}/`, {reported: true});

            history.push(`/`);

        } catch (err) {

            console.log(err);

            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }

        }

    };

    const textFields = (

        <div className="text-center">

            <FormGroup>

                <FormLabel>Reason</FormLabel>

                <FormControl
                    as="select"
                    aria-label="Select reason for reporting"
                    name="reason"
                    value={reportData.reason}
                    onChange={handleChange}
                >
                    <option value="0" default disabled>Please select a reason</option>
                    <option value="1">Graphic violence</option>
                    <option value="2">Explicit sexual content</option>
                    <option value="3">Sexualization of minors</option>
                    <option value="4">Inciting hatred</option>
                    <option value="5">Encouraging suicide or self-harm</option>
                    <option value="6">Attempting to defraud</option>
                    <option value="7">Advertising illegal products</option>
                    <option value="8">Blatant copyright infringement</option>
                    <option value="9">
                        Other serious reason - please describe in 'Explanation'
                    </option>
                </FormControl>

            </FormGroup>
            {errors?.reason?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}


            <FormGroup>
    
                <FormLabel>Explanation</FormLabel>

                <FormControl
                    as="textarea"
                    rows={4}
                    name="explanation"
                    value={reportData.explanation}
                    onChange={handleChange}
                />

            </FormGroup>
            {errors?.explanation?.map((message, idx) => (
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

            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                type="submit"
            >
                Create
            </Button>

        </div>
    );


    return (

        <Form onSubmit={handleSubmit}>

            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`
                            ${appStyles.Content} ${styles.Container}
                            d-flex flex-column justify-content-center
                        `}
                    >

                        <div className="d-md-none">{textFields}</div>

                    </Container>
                </Col>

                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>

                        {textFields}

                    </Container>
                </Col>

            </Row>
        </Form>

    );
};


export default ReportCreateForm;
