import React, { Component} from 'react';
import LayoutApp from './utils/LayoutApp.js';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as actions from '../actions'

//import {  Redirect } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
          email: "",
          password: "",
          login:false
        } 
    }


    async componentDidUpdate(){
      
      if(this.props.auth.success){
        await this.props.history.replace('/');
      }

   }

     handleSubmit = async (event) =>{
      await event.preventDefault();
      await this.props.login(this.state.email, this.state.password,  this.child.current.loading )
      //console.log(this.props.data)
    }
      
    handleChange = (event) =>{
        event.preventDefault();
        this.setState({
        [event.target.name]: event.target.value
        });
       
    }



  render() {
    return (
      <LayoutApp  ref={this.child} title = "Login" >

        <form  onSubmit={this.handleSubmit}>

          <div className = "group-input" >
              <label  className = "label-input">Email</label>
              <input name = 'email' type="email"  defaultValue={this.state.email} onChange={this.handleChange} className="input-form" required  autoComplete="username" />
          </div>

          <div className = "group-input" >
              <label  className = "label-input">Senha</label>
              <input name = 'password' type="password" className="input-form" defaultValue={this.state.password} onChange={this.handleChange} required autoComplete = "current-password"/>
          </div>

          <div className = "group-button">
                <button type = 'submit' className="btn">Login</button>
          </div>
          
        </form>
      </LayoutApp>
    )
  }




}



//const mapStateToProps = null
const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps )(Login);





