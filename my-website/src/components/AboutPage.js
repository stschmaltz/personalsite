import React from 'react';
import '../css/styles.css';
import selfImage from '../images/20181225_155058.jpg';
import withPageView from './withPageView';
import { compose } from 'recompose';

const AboutPage = () => (
  <div className="about">
    <div className="about-2">
      <div className="about-pic">
        <img src={selfImage} alt="" className="about-pic__img" />
      </div>
      <div className="about-title">
        <span className="about-title__intro">Hey Im Shane!</span>
        <span className="about-title__desc">This is a bit about me.</span>
      </div>
    </div>
    <div className="about-3">
      <div className="about-paragraph">
        <span className="about-paragraph__first">
          Hi my name is Shane Schmaltz. I’m a software developer from Calgary
          Alberta Canada. Welcome to my website! It was the first site I made
          with React.. and I am currently re-writing it. I have learned tons
          since it's first creation and it no longer showcases my abilities as a
          web developer. Thanks for stopping by, please feel free to contact me
          using the contact page.
        </span>
        <span className="about-paragraph__second" />
      </div>
    </div>
  </div>
);

export default compose(withPageView)(AboutPage);
