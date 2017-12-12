import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import SignInComponent from '../components/SignInComponent';
import HomePageComponent from '../components/HomePageComponent';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path='/signin' render={(props) => (
                        <SignInComponent
                            
                        />
                    )} />
                    <Route exact path='/signup'> </Route>
                    <Route exact path='/' 
                            render={(props) => (
                        <HomePageComponent />
                    )} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));