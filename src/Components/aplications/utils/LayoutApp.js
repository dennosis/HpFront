
import React, { Component } from 'react';
import './LayoutApp.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faExpandArrowsAlt, faCompressArrowsAlt} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loader-spinner'

class LayoutApp extends Component {
  constructor(props, ref){
    super(props, ref)

    let modal, close, show

    if(this.props.modal !== undefined){
      modal = true
      show = this.props.modal.show

      if(this.props.modal.close !== undefined)
        close = this.props.modal.close
      else
       close = false

    }else{
      modal = false
      close = false
      show = false
    }

    this.state = {
      isDrop:false,
      isModal: modal,
      isClose: close,
      isShow: show,
      isloader:false
    }

  }


  /**
   * função que habilita o modal, quando a aplicação esta em modo 'loading' essa função fica bloqueada
   * 
   */
  showModal=(show = null)=>{
    if(!this.state.isloader){
      let tmpshow
      
      if(show !== null)
        tmpshow = show
      else
        tmpshow = !this.state.isShow
      
      this.setState({
        isShow: tmpshow
      })
    }
  } 

  dropMenu=()=>{
    this.setState({
      isDrop: !this.state.isDrop,
    })
  }

  loading = (load = null) =>{
    let tmpload
    if(load !== null)
      tmpload = load
    else
      tmpload = !this.state.isloader

    this.setState({
      isloader: tmpload,
    })

  }

  render() {

    let  modalClass

    if(this.state.isModal && this.state.isShow)
      modalClass = "layout-app-modal-on"
    else
      modalClass = "layout-app-modal-off"
    
    return (
    <div className = {modalClass} onClick = {()=>this.showModal(false)}>
      {(!(this.state.isModal && this.state.isClose && this.state.isShow === false) || this.state.isModal === false) &&
        
        <div className = "layout-app-modal-body" onClick = {(e) => {e.stopPropagation();}}>

          <div className = "layout-app" >
              
              { 
                //tela de bloqueio do menu
                this.state.isDrop   &&
                <div onClick = {this.dropMenu} className = "layout-app-block-screen"></div>
              }

            
              {//Menu
                this.state.isDrop &&
                <div className = 'layout-app-menu'>
                {this.props.menu &&
                    <nav className = "not-scroll">
                        <ul>
                          {
                            this.props.menu.map((menuItem, index) =>
                                <li  
                                  key={index} 
                                  onClick = {()=>{
                                      menuItem.comand()
                                      if(menuItem.drop)
                                        this.dropMenu()
                                    }
                                  }
                                >
                                  {menuItem.title}
                                </li>
                            )
                          }
                        </ul>
                    </nav>
                }
                </div>
              }

              <div className = "layout-app-header" >
                
                {this.props.menu &&
                  <FontAwesomeIcon icon={ faBars } size="2x" onClick = { this.dropMenu } className = "layout-app-ico-menu layout-app-ico"/>
                }

                <span className = 'layout-app-header-title'>
                {
                  this.props.title
                }
                </span>
                
                
                {//fechar modal
                  (this.state.isModal && this.state.isClose && this.state.isShow) &&
                  <FontAwesomeIcon icon={ faTimes } size="1x" onClick = { ()=>this.showModal(false) } className = "layout-app-ico" />
                }
                
                { //maximinizar 
                  (this.state.isModal && this.state.isClose === false && !this.state.isShow)  &&
                    <FontAwesomeIcon icon={ faExpandArrowsAlt } size="1x" onClick = { ()=>this.showModal() } className = "layout-app-ico" />
                 
                }

                { //minimizar
                  (this.state.isModal && this.state.isClose === false && this.state.isShow)  &&
                    <FontAwesomeIcon icon={ faCompressArrowsAlt } size="1x" onClick = { ()=>this.showModal()} className = "layout-app-ico" />
                }


              </div>

              {//corpo da aplicacao
              <div className = {"layout-app-body " + (this.props.classNameBody?this.props.classNameBody : "")}>

                {this.state.isloader &&
                <div className = "layout-app-loader">
                  <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
                </div>
                }

                {
                  this.props.children
                }

                

              </div>
              }
          </div>
        </div>
      }
    </div>


    );
  }


}

export default LayoutApp
