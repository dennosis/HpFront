export default function app(state = [], action) {
    switch (action.type) {
    
        case 'DROP_MENU_MAIN':
            return {    ...state,
                        isDrop:  action.isDrop
                    }  
     

        case 'ALERT':
        return {    ...state,
            alert:  action.alert
                }  

        default:
        return state;
    }
  
  
}