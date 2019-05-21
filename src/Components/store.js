import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'

const loggerMiddleware = createLogger();

const persistConfig = {
    //key: 'root',
    key: 'keyOfStore',
    storage,
    blacklist: ['header','app'],
}


const initialState = { 
    user: {auth:{
        name:"",
        email:"",
        success: false,
        access_token:"",
        logout: false,
        error: "",
    }} 
  };

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
);

export const persistor = persistStore(store)


 




