export default function app(state = [], action) {
    switch (action.type) {
    
        case 'BLOCK_SCREEN':
            return {    ...state,
                        isBlock:  action.isBlock,
                        exceAction: action.exceAction
                    }  
     
     
        default:
        return state;
    }
  
  
}