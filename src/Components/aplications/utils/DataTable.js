
import React, { Component} from 'react';
import './DataTable.css';


class DataTable extends Component {
  constructor(props){
        super(props)
/*
        const data =[
            {accountName:'foo', contractValue:'55.12'},
            {accountName:'monkey', contractValue:'55.2'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},
            {accountName:'chicken', contractValue:'55.1'},

        ]
        */
        console.log(props.data)

        this.state = {
            //data: data,
            data: props.data,
            direction: 'asc',
            column: null,

            pagination:{
              qtd: 5,
              values: [5, 10, 25, 50, 100],
              currentPage:1,
              firstPage:1,
              lastPage:1,
            }
        }
    }

    async componentWillMount(){
      await this.setLastPage()
      await console.log(this.state.pagination)
  }

  setLastPage = async ()=>{
    if(this.state.data!== undefined  && this.state.data.length > 0){
      let lastPage = await Math.ceil(this.state.data.length/this.state.pagination.qtd)
      
      await this.setState({
        pagination:{
          ...this.state.pagination,
          lastPage: lastPage,
          currentPage: this.state.pagination.currentPage > lastPage ? lastPage : this.state.pagination.currentPage
        }

      })
      
    }else{
      await this.setState({
        pagination:{
          ...this.state.pagination,
          lastPage: 1,
        }
      })
    } 
  }


  handleChange = async (event) =>{
    event.preventDefault();
    await this.setState({
      pagination:{
        ...this.state.pagination,
        [event.target.name]: event.target.value
      }
      
    });
    await this.setLastPage();
  }


  setArrow = (column) => {
    let className = 'sort-direction';
    if (this.state.column === column) {
      className += this.state.direction === 'asc' ? ' asc' : ' desc';
    }
    return className;
  };
  
    
  sortBy = (column)=>{
    const direction = this.state.column ? (this.state.direction === 'asc' ? 'desc' : 'asc') : 'desc';
    const sortedData = this.state.data.sort((a, b) => {
      const nameA = a[column].toUpperCase(); // ignore upper and lowercase
      const nameB = b[column].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
      
    if (direction === 'desc') {
      sortedData.reverse();
    }
    
    this.setState({
        data: sortedData,
        column,
        direction,
    });
  }


  setPage=(index)=>{
    if(index>=this.state.pagination.firstPage && index <=this.state.pagination.lastPage){
      this.setState({
        pagination:{
          ...this.state.pagination,
          currentPage:index
        }
      })
    }
  }



  render() {
      const rows = []
      /*

       if(this.props.data !== undefined && this.props.data && this.props.data.length > 0 && false){
        for(let i = ((this.state.pagination.currentPage-1)*this.state.pagination.qtd); i < (this.state.pagination.qtd*this.state.pagination.currentPage) && i < this.state.data.length; i++)
        {
          rows.push(
            <tr key = {i+1}> 

              <td>{i+1}</td>
              <td>{this.state.data[i].accountName}</td>
              <td>{this.state.data[i].contractValue}</td>
            </tr>
          )
        }
      }
      */
    
      
      if(this.state.data !== undefined && this.state.data && this.state.data.length > 0){
        for(let i = ((this.state.pagination.currentPage-1)*this.state.pagination.qtd); i < (this.state.pagination.qtd*this.state.pagination.currentPage) && i < this.state.data.length; i++)
        
        
        {
          rows.push(
            <tr key = {i}> 
 
              {
                this.props.columns.map((row, index)=><td key = {index}>{this.state.data[i][row.selector]}</td>)
              }
              
            </tr>
          )
        }
      }


      return (
        <div className = "table-app">
          
          <div className = "table-app-header">

          </div>
          
          <div className = "table-app-body">
            <table className = "table-app-table">
                <thead>
                    {this.props.columns !== undefined && this.props.columns.length > 0 &&
                    <tr>
                      {
                        /*
                        <th>indice</th>
                        <th onClick={()=>this.sortBy('accountName')}>
                            Account Name
                            <span className={this.setArrow('accountName')}></span>
                        </th>
                        <th onClick={()=>this.sortBy('contractValue')}>
                            Contract Value
                            <span className={this.setArrow('contractValue')}></span>
                        </th>
                        */

                      }
                      {
                        this.props.columns.map((row, index)=>{
                            return <th key = {index}  onClick={row.sortable?()=>this.sortBy(row.selector):""}>
                              {row.name}
                              <span className={this.setArrow(row.selector)}></span>
                            </th>
                        })
                      }


                    </tr>
                    }
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
          </div>
          
          <div className = "table-app-footer">
            
            <select name = 'qtd' className="table-app-input-form" defaultValue={this.state.pagination.qtd} onChange={this.handleChange}  required>
              {
                this.state.pagination.values.map((opt, index)=><option key = {index} value={opt}>{opt}</option>)
              }
            </select>
            
            <ul className="pagination">
                
                <li className={this.state.pagination.currentPage === this.state.pagination.firstPage ? 'disabled' : ''}   onClick = {()=>this.setPage(this.state.pagination.currentPage - 1)}>
                    {'<'}
                </li>
                
                <li className={this.state.pagination.currentPage === this.state.pagination.firstPage ? 'disabled' : ''} onClick = {()=>this.setPage(1)}>
                    {this.state.pagination.firstPage}
                </li>

                <li className={this.state.pagination.currentPage === this.state.pagination.firstPage ? 'disabled' : ''} style = {{cursor:'default'}}>
                    ...
                </li>
                

                <li className='active'>
                      {this.state.pagination.currentPage}
                </li>
                
                
                <li  className={this.state.pagination.currentPage === this.state.pagination.lastPage ? 'disabled' : ''} style = {{cursor:'default'}}>
                  ...
                </li>

                <li className={this.state.pagination.currentPage === this.state.pagination.lastPage ? 'disabled' : ''} onClick = {()=>this.setPage(this.state.pagination.lastPage)}>
                    {this.state.pagination.lastPage}
                </li>
                <li className={this.state.pagination.currentPage ===  this.state.pagination.lastPage ? 'disabled' : ''} onClick = {()=>this.setPage(this.state.pagination.currentPage + 1)}>
                    {'>'}
                </li>
            </ul>






            
          
            <span className = "table-app-qtd-row">
              {
                ((this.state.pagination.currentPage-1)*this.state.pagination.qtd +1) + " até " + ((this.state.pagination.qtd*this.state.pagination.currentPage) < this.state.data.length ? (this.state.pagination.qtd*this.state.pagination.currentPage) : this.state.data.length) + " de " +this.state.data.length
              }
            </span>
          </div>

        </div>
      );
  }
}

export default DataTable;