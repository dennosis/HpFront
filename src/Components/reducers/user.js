export default function app(state = [], action) {
    switch (action.type) {
    
        case 'LOGIN_SUCCESS':
            return {...state,
                        auth:{
                            ...state.auth,
                            name:action.data.user_name,
                            email:action.data.user_email,
                            success: action.data.success,
                            access_token:action.data.access_token,
                            error: ""
                        }
                        
                    }

        case 'LOGIN_FAILURE':
            return {...state,
                    
                        auth:{
                            ...state.auth,
                            name:"",
                            email:"",
                            success: action.error.success || false,
                            access_token:"",
                            error: action.error.message || "error"
                        },
                                       
                    }

        case 'LOGOUT_SUCCESS':
        return {...state,
                    auth:{
                        ...state.auth,
                        name:"",
                        email:"",
                        success:false,
                        logout: action.data.success,
                        access_token:"",
                        error: ""
                    }
                    
                }

        case 'LOGOUT_FAILURE':
            return {...state,
                        auth:{
                            ...state.auth,
                            logout: false,
                            error: action.error.message || "error"
                        },             
                    }
                    
        default:
        return state;
    }
  
  
}