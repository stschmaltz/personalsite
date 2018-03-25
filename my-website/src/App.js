import React, { Component } from 'react';
import './styles/landing.css';

class App extends Component {
  render() {
    return (
      <div className="landing-body">
        <header className="landing-header">
          <div className="header-nav-container-inner">
            <nav className="header-nav-bar">
              <div className="header-nav-container-inner">
                <a href="http://localhost:3000/public/" className="header-nav-container__home">Home</a>
                <a href="" className="header-nav-container__about">About</a>
                <a href="" className="header-nav-container__resume">Resume</a>
                <a href="" className="header-nav-container__contact">Contact Me</a>
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
