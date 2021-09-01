const initialState = {
    status:''
}

export const MainMenuReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'SET_MAIN_MENU_TO_OPEN':
            return {
                ...state,
                status:'opened'
            }
        case 'SET_MAIN_MENU_TO_CLOSE':
            return{
                ...state,
                status:'closed'
            }
        default:
             return state
    }
}