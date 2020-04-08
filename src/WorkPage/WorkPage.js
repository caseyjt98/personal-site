import React from 'react';
import { Col, Row } from 'antd';
import './WorkPage.css'


class WorkPage extends React.Component {
    render() {

        return (
            <div className="container">
                <Row className="row-one">
                    <Col lg={{ span: 6, offset: 5 }}>
                        <button id="stem" > Stem Disintermedia </button>
                    </Col>
                    <Col lg={{ span: 6, offset: 2 }}>
                        <button id="factual" > Factual </button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 9 }}>
                        <button id="uliza" > Uliza </button>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default WorkPage;