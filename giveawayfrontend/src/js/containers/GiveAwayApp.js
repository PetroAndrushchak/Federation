import React from 'react';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App'; 

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

const GiveAwayApp = () => (
   <Provider store = {store}>
        <Router>
            <App/>
        </Router>
   </Provider> 
)

export default GiveAwayApp;