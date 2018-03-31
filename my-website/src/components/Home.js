import React, { Component } from 'react';
import "../styles/home.css";

class Home extends Component {
    render() {
        return (
          <div className="home">
            <span className="home__name">Shane Schmaltz</span>
            <span className="home__mini-description">
              Software Developer
            </span>
            <div className="social-bar">
              <a
                className="social-bar__linkedin"
                href="https://www.linkedin.com/in/stschmaltz/"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="social-bar__github"
                href="https://github.com/stschmaltz"
              >
                <i className="fab fa-github-square" />
              </a>
            </div>
          </div>
        );
    }
}

export default Home;
