const initialState ={
    status:'',
    orderBy:'',
    priceFrom:'',
    priceTo:'',
    ratedWith:''

}
export const ProductFiltersReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'OPEN_PRODUCT_FILTERS':
            return{
                ...state,
                status:'opened'
            }
        case 'CLOSE_PRODUCT_FILTERS':
            return{
                ...state,
                status:'closed'
            }
        case 'TOGGLE_PRODUCT_FILTERS':
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