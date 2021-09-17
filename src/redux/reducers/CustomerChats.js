const initialState = {
    listOfChats:true
}
export const CustomerChatsReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'HIDE_CUSTOMERS_LIST_OF_CHATS':
            return{
                state,
                listOfChats:false
            }
        case 'SHOW_CUSTOMERS_LIST_OF_CHATS':
            return{
                state,
                listOfChats:true
            }
        default:
            return state
    }
}
