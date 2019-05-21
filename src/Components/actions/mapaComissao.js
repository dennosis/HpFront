import api from '../Api'
import {infoAlert} from "./header"

export function getMapaComissao(loading) {
    loading(true)
    return dispatch => {
        api.getMapaComissao()
            .then(
                res=>{
                    
                    dispatch(success(res.data))
                    loading(false)
                },
                error=>{
                    dispatch(failure(error.data))
                    dispatch(infoAlert({type:"error", content: "Erro ao buscar Mapa de Comissão"}))
                    loading(false)
                }
        )
    }

    function success(data) {return {type: 'GET_MAPA_COMISSAO', data}}
    function failure(error) {return {type: 'FAILURE_LOAD_MAPA_COMISSAO', error}}
}


export function syncMapaComissao(start, end, loading) {
    loading(true)
    return dispatch => {
        api.syncMapaComissao(start, end)
            .then(
                res=>{
                    console.log(res)
                    dispatch(success(res.data))
                    dispatch(infoAlert({type:"success", content: "Base Sincronizada"}))
                    loading(false)
                },
                error=>{
                    dispatch(failure(error.response))
                    dispatch(infoAlert({type:"error", content: "Erro ao Sincronizar a Base"}))
                    loading(false)
                }
        )
    }

    function success(data) {return {type: 'SYNC_MAPA_COMISSAO', data}}
    function failure(error) {return {type: 'FAILURE_SYNC_MAPA_COMISSAO', error}}
}


