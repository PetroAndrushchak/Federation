import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import Main from './Main';

class AppComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <HeaderComponent />
          <Main/>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));