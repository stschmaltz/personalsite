import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('main'))
