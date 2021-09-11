const initialState ={
    status:'',
    orderBy:'',
    minTotal:'',
    maxTotal:'',
    initialDate:'',
    finalDate:'',
    sellerName:'',

}
export const PurchasesFiltersReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'OPEN_PURCHASES_FILTERS':
            return{
                ...state,
                status:'opened'
            }
        case 'CLOSE_PURCHASES_FILTERS':
            return{
                ...state,
                status:'closed'
            }
        case 'TOGGLE_PURCHASES_FILTERS':
            if(!state.status || state.status == 'closed'){
                return{
                    ...state,
                    status:'opened'
                }
            }
            else if(state.status == 'opened'){
                return{
                    ...state,
                    status:'closed'
                }
            }
        default:
            return state
    }
}