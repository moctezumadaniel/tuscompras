const initialState = {
    activeSearch:false,
}
export const NavbarReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'TOGGLE_PRODUCT_SEARCH':
            return {
                ...state,
                activeSearch:!state.activeSearch
            }
        case 'ACTIVATE_PRODUCT_SEARCH':
            return{
                ...state,
                activeSearch:true
            }
        case 'DEACTIVATE_PRODUCT_SEARCH':
            return{
                ...state,
                activeSearch:false
            }
        default:
            return state
    }
}