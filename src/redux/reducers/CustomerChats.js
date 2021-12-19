const initialState = {
  listOfChats: true,
  customerName: "",
};
export const CustomerChatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDE_CUSTOMERS_LIST_OF_CHATS":
      return {
        ...state,
        listOfChats: false,
      };
    case "SHOW_CUSTOMERS_LIST_OF_CHATS":
      return {
        ...state,
        listOfChats: true,
      };
    case "CHANGE_NAME_CUSTOMERS_LIST_OF_CHATS":
      return {
        ...state,
        customerName: action.customerName,
      };
    default:
      return state;
  }
};
