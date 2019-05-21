
import React, { Component } from 'react';
import './InfoAlert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faTimes, faBan, faSkullCrossbones, faInfo} from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle} from '@fortawesome/free-regular-svg-icons'

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as actions from '../actions'






class InfoAlert extends Component {

    alertClose = () => {
        this.props.infoAlert(false)
    }


    componentDidMount() {
        setTimeout(this.alertClose, 2000)
    }
    



    render() {

        return (
            
            <div className = {"info-alert color-alert-"+this.props.type + " "+ this.props.className} >
                    {
                        this.props.type === "alert" &&
                        <FontAwesomeIcon className = 'ico-alert' icon={ faExclamationTriangle } size="2x"/>
                    }
                    
                    {
                        this.props.type === "bloq" &&
                        <FontAwesomeIcon className = 'ico-alert' icon={ faBan } size="2x"/>
                    }
                    
                    {
                        this.props.type === "error" &&
                        <FontAwesomeIcon className = 'ico-alert' icon={ faSkullCrossbones } size="2x"/>
                    }
                    
                    {
                        this.props.type === "info" &&
                        <FontAwesomeIcon className = 'ico-alert' icon={ faInfo } size="2x"/>
                    }
                    
                    {
                        this.props.type === "success" &&
                        <FontAwesomeIcon className = 'ico-alert' icon={ faCheckCircle } size="2x"/>
                    }
                    
                    <span className = 'text-alert'>
                    {
                        this.props.content 
                    }
                    </span>
                    <FontAwesomeIcon className = 'close-alert' icon={ faTimes } size="1x"   onClick = {this.alertClose}/>
            </div>
                
        );
        
  }
}



//export default InfoAlert



const mapStateToProps = null;
  
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(InfoAlert);