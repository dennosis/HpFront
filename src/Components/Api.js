import axios from 'axios'
import { getToken } from "./Auth";



const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})


let header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
    
}


export const login = (email, password) => api.post('/auth/login', {email:email, password:password}, {headers: {...header, "Authorization":"Bearer "+getToken()}})
export const logout = () => api.post('/auth/logout', {}, {headers: {...header, "Authorization":"Bearer "+getToken()}})


export const getMapaComissao = () => api.get('mapa_comissao',{headers: {...header, "Authorization":"Bearer "+getToken()}})

export const findMapaComissaoByDate = (start, end) => api.post('mapa_comissao/propostas/bydate',{"dateStart":start,"dateEnd":end},{headers: {...header, "Authorization":"Bearer "+getToken()}})

export const syncMapaComissao = (start, end) => api.post('mapa_comissao/sync', {"dateStart":start,"dateEnd":end}, {headers: {...header, "Authorization":"Bearer "+getToken()}})

const apis = {
    login,
    logout,
    getMapaComissao,
    syncMapaComissao,
    findMapaComissaoByDate
}

export default apis