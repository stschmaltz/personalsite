import React, { Component } from "react";
import "./css/styles.css";

import NavigationBar from "./components/NavigationBar.js";
import Router from "./components/Router.js";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="landing-body">
          <NavigationBar />
          <div className="landing-main-section">
            <Router />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
