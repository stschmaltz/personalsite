import React, { Component } from 'react';
import './styles/landing.css';

class App extends Component {
  render() {
    return (
      <div className="landing-body">
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
        <div className="landing-main-section">
          <span className="landing-main-section__name">Shane Schmaltz</span>
          <span className="landing-main-section__mini-description">Software Developer</span>
          <div className="social-bar">
            <a className="social-bar__linkedin" href="https://www.linkedin.com/in/stschmaltz/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="social-bar__github" href="https://github.com/stschmaltz">
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
