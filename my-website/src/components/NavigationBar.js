import React, { Component } from 'react';
import '../css/styles.css';

const NavigationBar = () => (
  <header className="landing-header">
    <div className="header-nav-container-outer">
      <nav className="header-nav-bar">
        <div className="header-nav-container-inner">
          <a href="/" className="header-nav-container__home">
            Home
          </a>
          <a href="/about/" className="header-nav-container__about">
            About
          </a>
          <a
            href="https://drive.google.com/file/d/1mxnGYPUwBvPViMQqXjc1Lmie7QAW_5PD/view?usp=sharing"
            className="header-nav-container__resume"
          >
            Resume
          </a>
          <a href="/contact/" className="header-nav-container__contact">
            Contact
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default NavigationBar;
