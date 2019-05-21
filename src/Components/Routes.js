

import MapaComissao from './aplications/MapaComissao.js';
import ImportXls from './aplications/ImportXls.js';
import Login from './aplications/Login.js';
//import { isAuthenticated } from "./Auth";
import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";



class Routes extends Component {
  render(){
      return(
        <Switch>
              {
                // se não tiver autenticado manda para tela de login
                (!this.props.isAuthenticated && window.location.pathname !== "/login") &&
                <Redirect to = "/login" exact from = {window.location.pathname} />
              }
              
              <Route exact path='/mapadecomissao' component={MapaComissao}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/" component={() => <h1>Dashboard</h1>}/>
              <Route exact path="/importxls" component={ImportXls}/>
              
              <Route exact path="*" component={() => <h1>Page not found</h1>}/>


        </Switch>
      )
  }
}

export default Routes;