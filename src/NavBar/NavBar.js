import React, { Component } from "react";
import './NavBar.css';

class NavBar extends Component {

    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <a href="#home" className="nav-link"> Home </a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#projects" className="nav-link" > Projects </a>
                        </li>
                        <li className="nav-list-item">
                            <a href="#work-experience" className="nav-link" > Work Experience</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;