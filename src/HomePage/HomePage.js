import React from 'react';
import './HomePage.css'

class HomePage extends React.Component {
    render() {

        return (
            <div className="welcome-container">

                <div className='typewriter'>
                    <p> Hi. I'm Casey Taylor, and I'm a full stack developer. </p>
                    {/* <p> Welcome to my website. </p> */}
                </div>

            </div>

        )
    }
}

export default HomePage;
