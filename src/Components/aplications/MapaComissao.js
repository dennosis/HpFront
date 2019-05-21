import React, { Component } from 'react';
import LayoutApp from './utils/LayoutApp.js';
import DataTable from './utils/DataTable';
import {bindActionCreators} from 'redux'
import  {connect}  from 'react-redux'
import * as actions from '../actions'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import SyncBase from './SyncBase';
import BuscaPropostas from './BuscaPropostas.js';
//import DataTable from 'react-data-table-component';


class MapaDeComissao extends Component {
  constructor(props){
    super(props)
    this.child = React.createRef();
    this.child2 = React.createRef();
    this.child3 = React.createRef();
  }


  render() {

    let menu = [
        {
          title: "Mapa Comissão",
          comand: () => {this.props.getMapaComissao(this.child2.current.loading)},
          drop: true
        },
        {
          title: "Buscar Propostas",
          comand: () => {this.child3.current.showModal()},
          drop: true
        },
        {
          title: "Sincronizar Mapa",
          comand: () => {this.setState({isLoader:true}); this.props.syncMapaComissao("2019-01-01T00:00", "2019-03-20T00:00:00", this.child2.current.loading)},
          drop: true
        },
        {
          title: "alert",
          comand: () => {this.props.infoAlert({type:"alert", content: "vc nao tem permissao"})},
          drop: true
        },
        {
          title: "success",
          comand: () => {this.props.infoAlert({type:"success", content: "vc nao tem permissao"})},
          drop: false
        },
        {
          title: "error",
          comand: () => {this.props.infoAlert({type:"error", content: "vc nao tem permissao"})},
          drop: false
        },
        {
          title: "info",
          comand: () => {this.props.infoAlert({type:"info", content: "vc nao tem permissao"})},
          drop: false
        },
        {
          title: "bloq",
          comand: () => {this.props.infoAlert({type:"bloq", content: "vc nao tem permissao"})},
          drop: false
        },
        {
          title: "testeModal",
          comand: () => {this.child.current.showModal()},
          drop: true
        },
        
      ]

      const columns = [
        {
          name: 'CpfCliente',
          selector: 'CpfCliente',
          sortable: true,
        },
        {
          name: 'DataEntrada',
          selector: 'DataEntrada',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
        },
  
      ];
      /*
        {
          name: 'NomeOrgao',
          selector: 'NomeOrgao',
          sortable: true,
          right: true,
          wrap: true,
          cell: row => <div className = "circle-button"><div>{row.title}</div>{row.summary}</div>
        },
*/
  
    return (
          <LayoutApp  ref={this.child2} title = "Mapa Comissão" menu = {menu} >
           {
             //(this.props.data !== undefined && this.props.data.length!==0) &&
              
              /*
              <DataTable
              
                  columns={columns}
                  data={this.props.data}
                  responsive = {false}
                  pagination = {true}
                  paginationRowsPerPageOptions = {[5,10, 15, 20, 25, 30]}
                  subHeaderWrap = {false}
                  noHeader = {true}
                  overflowY = {true}
                  
                  selectableRows = {true}
                 fixedHeader = {true}
              />
*/
         /*    
            <BootstrapTable data={this.props.data} cbodyStyle={{overflow: 'overlay'}} ontainerStyle={{width: '200%',overflowX: 'scroll',  whiteSpace: 'nowrap'}} pagination trClassName="customClass" >


                <TableHeaderColumn isKey dataField=     'CpfCliente'          dataSort={ true }   thStyle={{ whiteSpace: 'normal'}}  >Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'         dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'NomeOrgao'           dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Price</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField=           'DataEntrada'       dataFormat={()=><div className = "circle-button"/>}   dataSort={ true }   thStyle={{ whiteSpace: 'normal' }}  >Product Name</TableHeaderColumn>

            </BootstrapTable>
            */
            
           }
           <DataTable columns = {columns} data = {this.props.data}/>
           <SyncBase ref={this.child}  show = {false}/>
           <BuscaPropostas ref={this.child3}  show = {false}/>
          </LayoutApp>
          
    );
  }
}



const mapStateToProps = (state) => ({
  data: state.mapaComissao.data || false
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapaDeComissao);

