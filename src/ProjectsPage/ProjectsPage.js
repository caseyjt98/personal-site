import React from 'react';
import './ProjectsPage.css';


class ProjectPage extends React.Component {
    render() {

        return (
            <div className="projects-container">
                <div className="typewriter">
                    Explore my personal projects here.
                </div>
                <div className="xtra-padding" />


                <div className="xtra-padding-sm">
                    <h1 className="project-heading"> Homebru </h1>
                    <p> A mobile application built on Angular Iconic Native and serving as a method of communication for UCLA students seeking apartment subletters or subleasers during the academic school year.</p>
                    <a href="https://github.com/caseyjt98/Homebru-Backend"> Find me on Github! (Back end) </a>
                    <br />
                    <a href="https://github.com/caseyjt98/Homebru-Frontend"> Find me on Github! (Front end) </a>
                </div>

                <hr />
                <div className="xtra-padding-sm" />

                <div className="xtra-padding-sm">
                    <h1 className="project-heading"> Aphrodite </h1>
                    <p> A web application built using React and intended to serve as an interactive class and activity planner for UCLA students, based on their interests and major. </p>
                    <a href="https://github.com/ucladevx/Aphrodite"> Find me on Github! </a>
                </div>


            </div>

        )
    }
}

export default ProjectPage;