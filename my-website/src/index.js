import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './components/Router';
registerServiceWorker();


ReactDOM.render(<Router />, document.getElementById('main'))
