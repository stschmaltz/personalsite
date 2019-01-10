import React from 'react';
import '../css/styles.css';
import withPageView from './withPageView';
import { compose } from 'recompose';

const ContactPage = () => (
  <>
    <div className="contact-container">
      <div className="contact-title">
        <span className="contact-container-title__header">
          Contact Information:
        </span>
      </div>
      <div className="contact-body">
        <div className="contact-body__linkedin">
          <a
            className="contact-body__linkedin-icon"
            href="https://www.linkedin.com/in/stschmaltz/"
          >
            <i className="fab fa-linkedin" />
            <span className="contact-body__linkedin-text">
              https://www.linkedin.com/in/stschmaltz/
            </span>
          </a>
        </div>

        <div className="contact-body__github">
          <a
            className="contact-body__github-icon"
            href="https://github.com/stschmaltz"
          >
            <i className="fab fa-github-square" />
            <span className="contact-body__github-text">
              https://github.com/stschmaltz
            </span>
          </a>
        </div>

        <div className="contact-body__email">
          <a
            className="contact-body__email-icon"
            href="mailto:stschmaltz@gmail.com"
          >
            <i className="fas fa-envelope-square" />
          </a>
          <span className="contact-body__github-text">
            stschmaltz @ gmail.com
          </span>
        </div>
      </div>
    </div>
  </>
);

export default compose(withPageView)(ContactPage);
