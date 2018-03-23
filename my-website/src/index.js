import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();


ReactDOM.render(<App/>, document.getElementById('main'))
