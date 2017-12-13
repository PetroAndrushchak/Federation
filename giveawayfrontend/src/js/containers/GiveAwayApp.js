import React from 'react';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import {createStore, applyMiddleware} from 'redux';
import rootReducer, {getCurrentUser} from '../reducers';
import {BrowserRouter as Router} from 'react-router-dom';
import AppComponent from './AppComponent'; 
import {authenticateUser} from '../actions';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

let user = getCurrentUser();

if(user){
    store.dispatch(authenticateUser(user));
}

const GiveAwayApp = () => (
   <Provider store = {store}>
        <Router>
            <AppComponent/>
        </Router>
   </Provider> 
)

export default GiveAwayApp;