import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import Main from './Main';

const App = ({
  currentUser
}) => (
    <div>
      <div>
        <HeaderComponent currentUser={currentUser}/>
        <Main />
      </div>

    </div>
  )

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));