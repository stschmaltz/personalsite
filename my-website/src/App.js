import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeBanner from './components/WelcomeBanner.js';
import FullName from './components/FullName.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <img src={logo} className="App-logo" alt="logo" />
          <FullName />
        </header>
        <div className="Welcome-banner">
          <WelcomeBanner /> 
        </div>
      </div>
    );
  }
}

export default App;
