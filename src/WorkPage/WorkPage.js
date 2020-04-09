import React from 'react';
import { Col, Row } from 'antd';
import './WorkPage.css'


class WorkPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedView: 'home'
        }
    }

    // displayStem = () => {
    //     this.setState({ selectedView: 'stem' })
    // }

    // displayFactual = () => {
    //     console.log("display project page called")
    //     this.setState({ selectedView: 'factual' })
    // }

    // displayUliza = () => {
    //     this.setState({ selectedView: 'uliza' })
    // }

    render() {

        let currentView

        switch (this.state.selectedView) {
            case 'home':
                currentView = (
                    <div className="container" >
                        <div className="typewriter">
                            Explore my work experience here.
                    </div>
                        <Row className="row-one">
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
                        </Row>
                    </div >
                )
                break
            case 'stem':
                currentView = (
                    <div>stem</div>
                )
                break
            case 'factual':
                currentView = (
                    <div>factual</div>
                )
                break
            case 'uliza':
                currentView = (
                    <div>uliza</div>
                )
                break
            default:
                currentView = <div>No Content</div>
        }

        return (
            <div className="container">
                {currentView}
            </div >

        )
    }
}

export default WorkPage;