import React from 'react';
import { Row, Col } from 'antd';
import './WorkPage.css'


class WorkPage extends React.Component {

    render() {
        return (
            <div>
                <div className="typewriter" id="work-container">
                    Explore my work experience here.
                </div>
                <div className="xtra-padding" />

                <div className="card">

                    <Row>
                        <Col>
                            <img src="logo192.png" alt="Avatar" />
                            <div class="container">
                                <h4><b>Stem Disintermedia</b></h4>
                                <p> Software Engineering Intern </p>
                            </div>
                        </Col>

                        <Col>
                            <img src="logo192.png" alt="Avatar" />
                            <div class="container">
                                <h4><b>Factual Inc.</b></h4>
                                <p> Software Engineering Intern </p>
                            </div>
                        </Col>

                        <Col>
                            <img src="logo192.png" alt="Avatar" />
                            <div class="container">
                                <h4><b>Uliza (South Africa) </b></h4>
                                <p> Software Engineering Intern </p>
                            </div>
                        </Col>
                    </Row>





                </div>

                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br /> <br />
            </div>
        )
    }
}

export default WorkPage;