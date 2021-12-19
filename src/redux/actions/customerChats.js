export const hideCustomersListOfChats = () => {
  return {
    type: "HIDE_CUSTOMERS_LIST_OF_CHATS",
  };
};

export const showCustomersListOfChats = () => {
  return {
    type: "SHOW_CUSTOMERS_LIST_OF_CHATS",
  };
};

export const changeNameCustomersListOfChats = (customerName) => {
  return {
    type: "CHANGE_NAME_CUSTOMERS_LIST_OF_CHATS",
    customerName,
  };
};
