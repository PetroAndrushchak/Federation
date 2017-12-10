import React from 'react';
import ReactDOM from 'react-dom';
import GiveAwayApp  from './js/containers/GiveAwayApp.js';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<GiveAwayApp/>, document.getElementById('root'));
registerServiceWorker();
