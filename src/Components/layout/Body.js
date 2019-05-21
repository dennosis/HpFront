
import React, { Component } from 'react';
import './Body.css';
import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as actions from '../actions'
import Routes from '../Routes'






class Body extends Component {

  render() {
    return (
        <div className = "body" >
            
            <Routes isAuthenticated = {this.props.auth.success} />
        
        </div>
    );
  }
}



const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Body);



