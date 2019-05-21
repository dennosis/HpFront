import React, { Component} from 'react';
import LayoutApp from './utils/LayoutApp.js';

import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as actions from '../actions'
//import dateFormat from 'dateformat'
import excel from 'xlsx'

class ImportXls extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

    this.state = {
      isShow:this.props.show,
      xls: "",
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
    //this.props.findMapaComissaoByDate(this.state.dateStart, this.state.dateEnd,  this.loading  )
    //console.log(this.state.xls);
   //let fileName = "newData.xlsx";
    let workbook = excel.readFile(this.state.xls);
    console.log(workbook)
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
      <LayoutApp  ref={this.child}  title = "Importa Xls"  modal ={{close: true, show:this.state.isShow}} >
        <form className = "sync-base-form" onSubmit={this.handleSubmit}>


          <div className = "group-input" >
              <label  className = "label-input">Selecionar Xls</label>
              <input name = 'xls' type="file" className="input-form" onChange={this.handleChange} required/>
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

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef : true } )(ImportXls);
