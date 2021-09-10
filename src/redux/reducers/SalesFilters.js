const initialState ={
    status:'',
    orderBy:'',
    minTotal:'',
    maxTotal:'',
    initialDate:'',
    finalDate:'',
    customerName:'',

}
export const SalesFiltersReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'OPEN_SALES_FILTERS':
            return{
                ...state,
                status:'opened'
            }
        case 'CLOSE_SALES_FILTERS':
            return{
                ...state,
                status:'closed'
            }
        case 'TOGGLE_SALES_FILTERS':
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