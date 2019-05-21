import React, { Component} from 'react';
import LayoutApp from './utils/LayoutApp.js';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as actions from '../actions'
import dateFormat from 'dateformat'


class BuscaPropostas extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

    /**
     * Define o intervalo de datas que sera exibido inicialmente
     */
    let dateStart = new Date();
    let dateEnd = new Date();
    
    dateStart.setDate(dateEnd.getDate()-30)

    this.state = {
      isShow:this.props.show,
      dateStart: dateFormat(dateStart,"yyyy-mm-dd'T'HH:MM"),
      dateEnd: dateFormat(dateEnd,"yyyy-mm-dd'T'HH:MM"),
    } 
    
  }

  showModal=()=>{
    this.child.current.showModal();
  };

  loading = (loader) =>{
    this.child.current.loading(loader)
    if(!loader){
      this.child.current.showModal(loader);
    }
  }
  
  handleSubmit = (event) =>{
    this.props.findMapaComissaoByDate(this.state.dateStart, this.state.dateEnd,  this.loading  )
    event.preventDefault();
  }
  

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
  }

  render() {
    return (
      <LayoutApp  ref={this.child}  title = "Buscar Propostas"  modal ={{close: true, show:this.state.isShow}} >
        <form className = "sync-base-form" onSubmit={this.handleSubmit}>

          <div className = "group-input" >
              <label  className = "label-input">Data Inicial</label>
              <input name = 'dateStart' type="datetime-local"  defaultValue={this.state.dateStart} onChange={this.handleChange} className="input-form" required  />
          </div>

          <div className = "group-input" >
              <label  className = "label-input">Data Final</label>
              <input name = 'dateEnd' type="datetime-local" className="input-form" defaultValue={this.state.dateEnd} onChange={this.handleChange} required/>
          </div>

          <div className = "group-button">
                  <button type = 'submit' className="btn">Buscar</button>
          </div>
          
        </form>
      </LayoutApp>
    );
  }
}



const mapStateToProps = state => ({
  data: state.mapaComissao.data || false
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef : true } )(BuscaPropostas);
