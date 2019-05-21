import React, { Component } from 'react';
import './Header.css';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as actions from '../actions'

import Menu from './Menu.js';
import InfoAlert from './InfoAlert.js';



class Header extends Component {
  render() {
    return (
    <div className = "header" >
      
       { 
          this.props.alert &&
          <InfoAlert className = 'header-InfoAlert' type = {this.props.alert.type} content = {this.props.alert.content} />
       }

       {
          this.props.auth.success &&
          <Menu/>
       }
       
       <span className = "header-user-name">
      {this.props.auth.name}
      </span>
    </div>

    );
  }
}

const mapStateToProps = state => ({
  alert: state.header.alert || false,
  auth: state.user.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
  
  
  
  