// React core, hooks, and routing
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// Third-party components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Row from "react-bootstrap/Row";

// Project-specific imports
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

// Styles
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/PostCreateEditForm.module.css";


/**
 * A form component for user to report a post.
*/
function ReportCreateForm() {

    useRedirect("loggedOut");

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
        let isMounted = true;

        /**
         * Fetches details of reported post.
         * Uses API response to define variables
         * and set reportData state with them.
        */
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}`, { signal });
                const post_id = parseInt(`${data.id}`);
                const post_title = `${data.title}`;
                const post_text = `${data.post_text}`;
                const post_image = `${data.image}`;

                if (isMounted) {
                    setReportData((reportData) => ({
                        ...reportData,
                        post_id: post_id,
                        post_title: post_title,
                        post_text: post_text,
                        post_image: post_image,
                        reason: 0,
                        explanation: "",
                    }));
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

    /**
     * Updates reportData state when user provides input.
    */
    const handleChange = (event) => {

        if (event.target.name === 'reason') {

            const numReason = parseInt(event.target.value);

            setReportData((reportData) => ({
                ...reportData,
                [event.target.name]: numReason,

            }))

        } else if (event.target.name === 'explanation') {

            setReportData((reportData) => ({
                ...reportData,
                [event.target.name]: event.target.value,

            }))

        }

    };

    /**
     * Method to send reportData.
     * 
     * Creates a Report instance in database and updates relevant
     * Post instance's 'reported' property to true.
    */
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            await axiosReq.post("/suspicious/", reportData);

            await axiosReq.patch(`/posts/${reportData.post_id}/`, { reported: true });

            history.push(`/`);

        } catch (err) {

            // console.log(err);

            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }

        }

    };

    return (

        <Row>
            <Col className="mx-auto py-2 p-0 p-md-2">
                <Container
                    className={`
                            ${appStyles.Content} ${styles.Container}
                            d-flex flex-column justify-content-center text-center
                        `}
                >

                    <Form onSubmit={handleSubmit}>

                        <FormGroup>

                            <FormLabel htmlFor="reason">Reason</FormLabel>

                            <FormControl
                                as="select"
                                aria-label="Select reason for reporting"
                                name="reason"
                                value={reportData.reason}
                                onChange={handleChange}
                                id="reason"
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
                                    Other serious reason - please describe
                                </option>
                            </FormControl>

                        </FormGroup>
                        {errors?.reason?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}


                        <FormGroup>

                            <FormLabel htmlFor="explanation">Explanation</FormLabel>

                            <FormControl
                                as="textarea"
                                rows={4}
                                name="explanation"
                                value={reportData.explanation}
                                onChange={handleChange}
                                id="explanation"
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

                    </Form>


                </Container>
            </Col>
        </Row>

    );
};


export default ReportCreateForm;
