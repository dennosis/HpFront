import { combineReducers } from 'redux';
import app from './app';
import header from './header';
import mapaComissao from './mapaComissao';
import user from './user';




export default combineReducers({
    app, 
    header,
    mapaComissao,
    user,
});