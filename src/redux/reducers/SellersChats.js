const initialState = {
  listOfChats: true,
  sellerName: "",
};
export const SellerChatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_SELLERS_LIST_OF_CHATS":
      return {
        ...state,
        listOfChats: false,
      };
    case "SHOW_SELLERS_LIST_OF_CHATS":
      return {
        ...state,
        listOfChats: true,
      };
    case "CHANGE_NAME_SELLERS_LIST_OF_CHATS":
      return {
        ...state,
        sellerName: action.sellerName,
      };
    default:
      return state;
  }
};
