import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent  from './js/components/AppComponent.js';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<AppComponent  />, document.getElementById('root'));
registerServiceWorker();
