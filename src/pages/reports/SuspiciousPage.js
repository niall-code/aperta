import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import { axiosReq } from "../../api/axiosDefaults";
import logo from "../../assets/logo.png";
import ReasonReader from "../../components/ReasonReader";
import styles from "../../styles/SuspiciousPage.module.css";


function SuspiciousPage() {

    const [reports, setReports] = useState({ results: [] });

    useEffect(() => {
        /**
         * Fetches Report instances
        */
        const fetchReports = async () => {
            try {
                const { data } = await axiosReq.get("/suspicious");
                setReports(data);

            } catch (err) {
                console.log(err);
            }
        };
        fetchReports();
    });

    return (
        <>
            {reports.results.length ? (

                <Card>
                    <Card className={styles.Card}>
                        <table>
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
                        </table>
                    </Card>
                    <Card className={styles.Card}>
                        <section id="reported-post">
                            <figure>
                                <img
                                    src={reports.results[0].post_image}
                                    alt="from reported post"
                                    id="r-post-image"
                                />
                            </figure>

                            <article id="r-post-text-fields">
                                <h5>{reports.results[0].post_title}</h5>
                                <p>{reports.results[0].post_text}</p>
                            </article>
                        </section>
                    </Card>
                    <Card className={`${styles.Card} ${styles.SusCount}`}>
                        <p>
                            <b>{reports.results.length}</b> suspicious posts to review
                        </p>
                    </Card>
                </Card>

            ) : (

                <>
                    <img src={logo} alt="logo" id="none-logo" />
                    <p id="none-text">Yay, nothing is suspicious right now</p>
                </>

            )}
        </>
    );

};


export default SuspiciousPage;
