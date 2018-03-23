import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/landing.css';
import WelcomeBanner from './components/WelcomeBanner.js';
import FullName from './components/FullName.js';



class App extends Component {
  render() {
    return (
      <div className="landingBody">
        <div className="landingSection">
          <span className="name">Shane Schmaltz</span>
          <span className="mini-description">Software Developer</span>
          <div className="social-bar">
            <a href="https://www.linkedin.com/in/stschmaltz/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/stschmaltz">
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
