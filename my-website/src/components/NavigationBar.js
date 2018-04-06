import React, { Component } from 'react';
import "../css/styles.css";

class NavigationBar extends Component {
    render() {
        return (
            <header className="landing-header">
                <div className="header-nav-container-outer">
                    <nav className="header-nav-bar">
                        <div className="header-nav-container-inner">
                            <a href="http://localhost:3000/" className="header-nav-container__home">Home</a>
                            <a href="http://localhost:3000/about/" className="header-nav-container__about">About</a>
                            <a href="https://drive.google.com/file/d/1mxnGYPUwBvPViMQqXjc1Lmie7QAW_5PD/view?usp=sharing" className="header-nav-container__resume">Resume</a>
                            <a href="http://localhost:3000/contact/" className="header-nav-container__contact">Contact</a>
                        </div>
                    </nav>
                </div>
            </header>

        );
    }
}

export default NavigationBar;
