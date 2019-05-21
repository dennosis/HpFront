import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'

import * as actions from '../actions'

import {  BrowserRouter as Router } from 'react-router-dom'

//import { withCookies } from 'react-cookie';


class App extends Component {

  onClickBlock = () =>{
      this.props.onClickBlock(this.props.exceAction)
  }

  render() {
    return (
      
        <Router>
          <div className="App">

            <Header/>
            <Body/>
            <Footer/>
            { 
              //tela de bloqueio
              this.props.isBlock &&
              <div onClick = {this.onClickBlock} className = "block-screen"></div>
            }
          </div>
        </Router>
    );
  }
}

//export default App;

const mapStateToProps = state => ({
  isBlock: state.app.isBlock || false,
  exceAction: state.app.exceAction || null
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);








