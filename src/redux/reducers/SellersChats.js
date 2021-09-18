const initialState = {
    listOfChats:true
}
export const SellerChatsReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'HIDE_SELLERS_LIST_OF_CHATS':
            return{
                state,
                listOfChats:false
            }
        case 'SHOW_SELLERS_LIST_OF_CHATS':
            return{
                state,
                listOfChats:true
            }
        default:
            return state
    }
}