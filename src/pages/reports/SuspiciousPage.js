// React core, hooks, and routing
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Third-party components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Project-specific imports

import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";

// Component
import ReasonReader from "../../components/ReasonReader";

// Image and styles
import logo from "../../assets/logo.png";
import styles from "../../styles/SuspiciousPage.module.css";


function SuspiciousPage() {

    useRedirect("loggedOut");
    const currentUser = useCurrentUser();
    const history = useHistory();

    useEffect(() => {
        if (currentUser && !currentUser.is_staff) {
            history.push("/");
        }
    }, [currentUser, history]);

    const [reports, setReports] = useState({ results: [] });

    useEffect(() => {
        let isMounted = true;

        /**
         * Fetches Report instances
        */
        const fetchReports = async () => {
            try {
                const { data } = await axiosReq.get("/suspicious");
                if (isMounted) {
                    setReports(data);
                }

            } catch (err) {
                // console.log(err);
            }
        };
        fetchReports();
        return () => {
            isMounted = false;
        };
    }, []);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/posts/${reports.results[0].post_id}/`);
            await axiosRes.delete(`/suspicious/${reports.results[0].id}/`);
            window.location.reload();
        } catch (err) {
            // console.log(err);
        }
    };

    const handleApprove = async () => {
        try {
            await axiosReq.patch(
                `/posts/${reports.results[0].post_id}/`,
                { reported: false, green_listed: true }
            );
            await axiosRes.delete(`/suspicious/${reports.results[0].id}/`);
            window.location.reload();
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <>
            {reports.results.length ? (

                <Card>
                    <Card className={styles.Card}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Reason</th>
                                    <td>
                                        <ReasonReader
                                            reasonNum={reports.results[0].reason}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Explanation</th>
                                    <td>{reports.results[0].explanation}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                    <Card className={styles.Card}>
                        <section className={styles.flexBox}>
                            <figure>
                                {reports.results[0].post_image.value ? (
                                    <img
                                        src={reports.results[0].post_image}
                                        alt="from reported post"
                                        className={styles.reportedPostImage}
                                    />
                                ) : (
                                    <img
                                        src="https://placehold.co/300x200?text=No+Image"
                                        alt="from reported post"
                                        className={styles.reportedPostImage}
                                    />
                                )}
                            </figure>

                            <article className={styles.reportedPostTextFields}>
                                <h5>{reports.results[0].post_title}</h5>
                                <hr></hr>
                                <p>{reports.results[0].post_text}</p>
                            </article>
                        </section>
                    </Card>
                    <Card className={`${styles.Card} ${styles.flexBox}`}>
                        <Button variant="success" onClick={handleApprove}>Approve</Button>
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </Card>
                    <Card className={`${styles.Card} ${styles.susCount}`}>
                        <p>
                            <b>{reports.results.length}</b> suspicious posts to review
                        </p>
                    </Card>
                </Card>

            ) : (

                <>
                    <Card className={`${styles.Card} ${styles.center}`}>
                        <img src={logo} alt="logo" className={styles.logo} />
                        <hr></hr>
                        <p>Yay, nothing is suspicious right now</p>
                    </Card>
                </>

            )}
        </>
    );

};


export default SuspiciousPage;
