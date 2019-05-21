export default function app(state = [], action) {
    switch (action.type) {
    
        case 'GET_MAPA_COMISSAO':
            return {...state,
                        data: action.data
                    }

        case 'SYNC_MAPA_COMISSAO':
            return {...state,
                        data: action.data               
                    }

        case 'FAILURE_SYNC_MAPA_COMISSAO':
        return {...state,
                        data: action.data
                    }

                    
        default:
        return state;
    }
  
  
}