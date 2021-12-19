export const hideSellersListOfChats = () => {
  return {
    type: "HIDE_SELLERS_LIST_OF_CHATS",
  };
};

export const showSellersListOfChats = () => {
  return {
    type: "SHOW_SELLERS_LIST_OF_CHATS",
  };
};

export const changeNameSellersListOfChats = (sellerName) => {
  return {
    type: "CHANGE_NAME_SELLERS_LIST_OF_CHATS",
    sellerName,
  };
};
