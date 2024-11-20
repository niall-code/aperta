import React, { useEffect, useState } from "react";

import { axiosReq } from "../../api/axiosDefaults";
import logo from "../../assets/logo.png";
import ReasonReader from "../../components/ReasonReader";


function SuspiciousPage() {

    const [reports, setReports] = useState({ results: [] });

    useEffect(() => {
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

                <>
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

                    <section>
                        <figure>
                            <img
                                src={reports[0].post_image}
                                alt="image from reported post"
                            />
                        </figure>

                        <article>
                            <h5>{reports.results[0].post_title}</h5>
                            <p>{reports.results[0].post_text}</p>
                        </article>
                    </section>

                    <p id="sus-count">
                        {reports.results.length} suspicious posts to review
                    </p>
                </>

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
