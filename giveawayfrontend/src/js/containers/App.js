import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import Main from './Main';
import {userActions} from '../actions'

const App = ({
  currentUser,
  onLogout
}) => (
    <div>
      <div>
        <HeaderComponent currentUser={currentUser} onLogout={onLogout} />
        <Main />
      </div>

    </div>
  )

const mapStateToProps = state => ({
  currentUser: state.authentication.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLogout() { dispatch(userActions.logout()) }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));