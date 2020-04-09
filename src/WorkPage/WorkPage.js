import React from 'react';
import { Col, Row } from 'antd';
import './WorkPage.css'


class WorkPage extends React.Component {

    render() {
        return (
            <div >
                <div className="typewriter" id="work-container">
                    Explore my work experience here.
                </div>
                <div className="xtra-padding" />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                {/* <Row className="row-one">
                    <Col lg={{ span: 6, offset: 5 }}>
                        <button className="work-button" id="stem"> Stem Disintermedia </button>
                    </Col>
                    <Col lg={{ span: 6, offset: 2 }}>
                        <button className="work-button" id="factual"> Factual </button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 9 }}>
                        <button className="work-button" id="uliza"> Uliza </button>
                    </Col>
                </Row> */}
            </div >

        )
    }
}

export default WorkPage;