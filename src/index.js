import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import { robots } from './robots.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
