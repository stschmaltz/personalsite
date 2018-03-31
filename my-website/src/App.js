import React, { Component } from "react";
import "./styles/landing.css";

import NavigationBar from "./components/NavigationBar.js";
import Router from "./components/Router.js";

class App extends Component {
  render() {
    return (
      <div className="landing-body">
        <NavigationBar />
        <div className="landing-main-section">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
