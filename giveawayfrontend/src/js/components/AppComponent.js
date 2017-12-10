import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

class AppComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <HeaderComponent />
          <div>
            MY GIVE AWAY APP
          </div>
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