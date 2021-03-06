import React from 'react';
import '../css/styles.css';
import withPageView from './withPageView';
import { compose } from 'recompose';

const Home = () => (
  <div className="home">
    <span className="home__name">Shane Schmaltz</span>
    <span className="home__mini-description">Software Developer</span>
    <div className="social-bar">
      <a
        className="social-bar__linkedin"
        href="https://www.linkedin.com/in/stschmaltz/"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a className="social-bar__github" href="https://github.com/stschmaltz">
        <i className="fab fa-github-square" />
      </a>
    </div>
  </div>
);

export default compose(withPageView)(Home);
