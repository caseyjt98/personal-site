import React from 'react';
import { Button, Col, Row } from 'antd';


class WorkPage extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Button> Stem Disintermedia </Button>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Button> Factual </Button>
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                        <Button> Uliza </Button>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default WorkPage;