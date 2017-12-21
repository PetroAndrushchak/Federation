import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import * as actions from '../actions'

import SignInComponent from '../components/SignInComponent';
import HomePageComponent from '../components/HomePageComponent';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            currentUser,
            onSignIn,
            history
        } = this.props;
        return (
            <div className="container">
                <Switch>
                    <Route exact path='/signin' render={(props) => (
                        <SignInComponent onSignIn = {
                            (signInInfo) => onSignIn(signInInfo).then(() => {
                                history.push('/')
                            })
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
                <div> sfsdfdsf</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSignIn(authData){
        console.log("Sign in!!!!");
        let result = actions.signIn(authData);
        let afterDispatch = dispatch(result) 
        return afterDispatch;
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));