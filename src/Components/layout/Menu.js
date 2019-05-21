import React, { Component } from 'react';
///import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faBars} from '@fortawesome/free-solid-svg-icons'
import './Menu.css';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as actions from '../actions'

import { NavLink} from 'react-router-dom';
import {LogoHpV2} from '../aplications/utils/Icons.js';



class MenuLi extends Component {

    constructor(props){
        super(props)
        this.state = {
            className:"",
            to:props.to
        }
       // this.child = React.createRef();
    }
    onActiveLi = ()=>{
        if(this.state.className === ""){
            this.setState({
                className:"menu-li-activate"
            })
        }else{
            this.setState({
                className:""
            })
        }
    }
    render(){
        return(
            <li className = {this.state.className}>  
                
                { 
                    (this.props.children === undefined && this.props.to) &&
                        <NavLink to={this.props.to} onClick = {
                                ()=>{
                                    if(this.props.onClick!==undefined){
                                        this.props.onClick();
                                    }
                                }
                            }
                        >{this.props.name}
                    </NavLink>
                }

                { 
                    (this.props.children !== undefined || this.props.to===undefined) &&
                    <a href = "/"  onClick = {
                            (e)=>{
                                e.preventDefault();
                                if(this.props.children !== undefined){
                                    this.onActiveLi(); 
                                }
                                
                                if(this.props.onClick!==undefined){
                                    this.props.onClick();
                                }
                            }
                        }
                    >{this.props.name}</a>
                }

                {
                    this.props.children
                }
            </li>
        )
    }
}


class Menu extends Component {

    dropMenu=()=>{
        this.props.dropMenu(!this.props.isDrop)
        this.props.infoAlert(false)
    }

    logout=()=>{
        this.dropMenu();
        this.props.logout()
    }



    render() {
        return (
            <div className = "container-menu">
            {/*
                <FontAwesomeIcon className = 'ico-menu' icon={faBars} size="2x" onClick={this.dropMenu}/>
            */}
                
                
                <LogoHpV2 className = 'ico-menu' onClick={this.dropMenu}/>


                {
                    this.props.isDrop &&

                    <div className = 'menu'>
                        <nav className = "not-scroll">
                            <ul className = "menu-ul menu-ul-lvl-1">  
                                <MenuLi  to='/mapadecomissao' name = "Mapa de Comissão" onClick={this.dropMenu}/> 
                                
                                
                                <MenuLi  name = "Teste" >
                                    <ul className = "menu-ul menu-ul-lvl-2">
                                        {/*
                                        <MenuLi name = "teste" ></MenuLi>
                                        <MenuLi  to= '#'name = "teste">
                                            <ul className = "menu-ul menu-ul-lvl-3">
                                                <MenuLi  name = "teste"/>
                                                <MenuLi to='/mapadecomissao'  onClick = {this.dropMenu} name = "teste"/>
                                                <MenuLi  name="Menu">
                                                    <ul className = "menu-ul menu-ul-lvl-4">
                                                        <MenuLi name = "teste"/>
                                                        <MenuLi to='/mapadecomissao'  onClick = {this.dropMenu} name = "teste"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                    </ul>
                                                </MenuLi>
                                                <MenuLi  name="Menu">
                                                    <ul className = "menu-ul menu-ul-lvl-4">
                                                        <MenuLi name = "teste"/>
                                                        <MenuLi to='/mapadecomissao'  onClick = {this.dropMenu} name = "teste"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                        <MenuLi name="sausaushaush shaushaushas husah"/>
                                                    </ul>
                                                </MenuLi>
                                            </ul>
                                        </MenuLi>
                                        */}
                                        
                                        
                                        
                                        
                                        <MenuLi to='/mapadecomissao' onClick = {this.dropMenu} name = "teste"/>
                                    </ul>
                                </MenuLi>

                                
                                <MenuLi to='/importxls' onClick = {this.dropMenu} name = "Importa Xls"/>

                                <MenuLi onClick = {this.logout} name = "Logout"/>
                            </ul>
                        </nav>
                    </div>
                }

            </div>
    );
  }
}



const mapStateToProps = state => ({
    isDrop: state.header.isDrop || false
});
  
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
  
  
  
  