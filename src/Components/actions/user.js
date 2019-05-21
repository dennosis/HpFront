import api from '../Api'
import {infoAlert} from "./header"
import {setToken, deleteToken} from "../Auth";
export  function login(email, password, loading) {
    
    return  dispatch => {
        loading(true)
        api.login(email, password)
            .then(
                async res => { 
                    await setToken(res.data.access_token)
                    await loading(false)
                    await dispatch(success(res.data));
                    
                },
                async error=> {
                    await dispatch(failure(error.response.data || false));
                    await loading(false)
                    await  dispatch(infoAlert({type:"error", content: "Erro ao Fazer Login"}))
                    
                }

            );
    };

    function success(data) { return { type: 'LOGIN_SUCCESS', data } }
    function failure(error) { return { type: 'LOGIN_FAILURE', error} }


}



export function logout() {
    
    return dispatch => {
       // loading(true)
        api.logout()
            .then(
                res => { 
                    deleteToken();
                    dispatch(success(res.data));
                   // loading(false)
                },
                error=> {
                    dispatch(failure(error.response.data || false));
                    dispatch(infoAlert({type:"error", content: "Erro ao Fazer Logout"}))
                   // loading(false)
                }

            );
    };

    function success(data) { return { type: 'LOGOUT_SUCCESS', data } }
    function failure(error) { return { type: 'LOGOUT_FAILURE', error} }


}