import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import csrStyles from './CSR.module.css'; // Import your CSS module

export default function CSR() {
    return (
        <div>
            <h4 style={{ textAlign: 'right', color: "#4981e2" }}> Home/tender/CSR intiatives</h4>
            <h1 style={{ textAlign: 'center', marginBottom: '5%', marginTop: "3%", color: "#4981e2" }}>CSR  Vision and Objectives</h1>
            <div className={`container mt-4 border border-primary p-4 ${csrStyles.csrContainer}`}>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-4" style={{ color: "#4981e2" }}>CSR VISION STATEMENT</h2>
                        <p className="lead">In accordance with the vision of the company, its CSR initiatives will supplement its contribution in environment protection, development of healthy and enlightened citizens, social upliftment, and sustainable community development through its service, conduct, and social initiatives.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="container mt-md-0 mt-4">
                            <h2 className={`text-primary mb-4 ${csrStyles.objectivesHeading}`}>OBJECTIVES</h2>
                            <ul className={`list-unstyled ${csrStyles.objectivesList}`}>
                                <li>
                                    <h5>1. Ensure an increased commitment at all levels in the organization to operate its business in an economically, socially & environmentally sustainable manner while recognizing the interests of all its stakeholders.</h5>
                                </li>
                                <li>
                                    <h5>2. To directly or indirectly take up programs that benefit the communities in & around its work centers and result, over a period of time, in enhancing the quality of life & economic well-being of the local populace.</h5>
                                </li>
                                <li>
                                    <h5>3. To develop an integrated and sustainable social responsibility program for the community.</h5>
                                </li>
                                <li>
                                    <h5>4. To play a major role in transforming society through education, health, and environmental awareness.</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
