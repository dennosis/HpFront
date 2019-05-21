import {blockScreen} from "./app.js"


export function dropMenu(isDrop) {
    return dispatch => {
        if(isDrop){
            dispatch(blockScreen(isDrop, { type: 'DROP_MENU_MAIN', isDrop: false}))
        }else{
            dispatch(blockScreen(isDrop))
        }
        
        dispatch(success(isDrop))
    };

    function success(isDrop) { return { type: 'DROP_MENU_MAIN', isDrop} }
}


export function infoAlert(content) {
    return dispatch => {
        dispatch(success(content))
    };
    function success(content) { return { type: 'ALERT', alert:content }}
}

