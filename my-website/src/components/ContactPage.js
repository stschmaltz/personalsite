import React, { Component } from "react";
import "../css/styles.css";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-container">
            <div className="contact-title">
              <span className="contact-container-title__header">Contact Information:</span>
            </div>
            <div className="contact-body">
              <div className="contact-body__linkedin">
                <a className="contact-body__linkedin-icon" href="https://www.linkedin.com/in/stschmaltz/">
                  <i className="fab fa-linkedin" />
                </a>
                <span className="contact-body__linkedin-text">
                  https://www.linkedin.com/in/stschmaltz/
                </span>
              </div>

              <div className="contact-body__github">
                <a className="contact-body__github-icon" href="https://github.com/stschmaltz">
                  <i className="fab fa-github-square" />
                </a>
                <span className="contact-body__github-text">
                  https://github.com/stschmaltz
                </span>
              </div>

              <div className="contact-body__email">
                <a className="contact-body__email-icon" href="mailto:stschmaltz@gmail.com">
                  <i className="fas fa-envelope-square" />
                </a>
                <span className="contact-body__github-text">
                  stschmaltz@gmail.com
                </span>
              </div>

              <div className="contact-body__instagram">
                <a className="contact-body__instagram-icon" href="https://instagram.com/wil_shane">
                  <i className="fab fa-instagram" />
                </a>
                <span className="contact-body__instagram-text">
                  https://instagram.com/wil_shane
                </span>
              </div>

            </div>
        </div>
      </div>
    )
  }
};

export default ContactPage;
