export function blockScreen(isBlock, exceAction = null) {
    
    return dispatch => {
        dispatch(success(isBlock, exceAction))
    };

    function success(isBlock, exceAction) { return { type: 'BLOCK_SCREEN', isBlock, exceAction} }
}


export function onClickBlock(action){
    return dispatch => {
        dispatch(blockScreen(false))
        dispatch(exceAction(action))
    };
    function exceAction(exceAction) { return exceAction }
}







