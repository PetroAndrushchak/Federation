import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import {userActions} from '../actions'

import SignInComponent from '../components/SignInComponent';
import HomePageComponent from '../components/HomePageComponent';

class Main extends Component {

    render() {
        const {
            currentUser,
            onSignIn
        } = this.props;
        return (
            <div className="container">
                <Switch>
                    <Route exact path='/signin' render={(props) => (
                        <SignInComponent onSignIn = {
                            (signInInfo) => onSignIn(signInInfo)
                        }
                        />
                    )} />
                    <Route exact path='/signup'> </Route>
                    <Route exact path='/'
                        render={(props) => (
                            <HomePageComponent
                                {...props}
                                currentUser={currentUser}
                            />
                        )} />
                </Switch>
            
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.authentication.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSignIn(authData){
        let result = userActions.login(authData,  ownProps.history);
        let afterDispatch = dispatch(result) 
        return afterDispatch;
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));