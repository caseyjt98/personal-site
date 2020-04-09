import React from 'react';
import './HomePage.css'
/*import App from '../App.js'*/

class HomePage extends React.Component {

    render() {

        const gradientStyle = {
            background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)'
        }

        return (
            <div className="welcome-container" style={gradientStyle} >
                <div className='typewriter'>
                    Hi. I'm Casey Taylor, and I'm a full stack developer.
                </div>
                <div className="xtra-padding" > </div>
                <a href="#projects">
                    <button className="home-page-button"  > View my work. </button>
                </a>



            </div>

        )
    }
}

export default HomePage;
