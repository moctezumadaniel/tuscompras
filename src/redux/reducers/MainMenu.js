const initialState = {
    open:false
}

export const MainMenuReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'SET_MAIN_MENU_TO_OPEN':
            return {
                ...state,
                open:true
            }
        case 'SET_MAIN_MENU_TO_CLOSE':
            return{
                ...state,
                open:false
            }
        default:
             return state
    }
}