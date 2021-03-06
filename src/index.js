// Can use imports because webpack is already installed for bundling. 
// All components must start with a capitol

import React from 'react'; // this is vue library..the core section of react used in VR / DOM manipulation for us etc. and importing libraries such as ReactDOM.. which is the glue of the React. 
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './index.css'; // allows css from anywhere or any component. Have to tell where css is
import App from './containers/App';
import 'tachyons'; // a package similar to bootstrap with predefined classes for styling such as className="tc"
import registerServiceWorker from './registerServiceWorker'; // new feature to allow apps to work offline
import { robots } from './robots.js';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
