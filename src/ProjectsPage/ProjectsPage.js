import React from 'react';
import './ProjectsPage.css';


class ProjectPage extends React.Component {
    render() {
        const gradientStyle = {
            background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)'
        }
        return (
            <div className="projects-container" style={gradientStyle}>
                <div className="typewriter">
                    Explore my personal projects here.
                </div>
            </div>

        )
    }
}

export default ProjectPage;