export const toggleProductSearch = () => {
  return {
    type: "TOGGLE_PRODUCT_SEARCH",
  };
};

export const activateProductSearch = () => {
  return {
    type: "ACTIVATE_PRODUCT_SEARCH",
  };
};

export const deactivateProductSearch = () => {
  return {
    type: "DEACTIVATE_PRODUCT_SEARCH",
  };
};

export const changeProductSearch = (search) => {
  return {
    type: "CHANGE_PRODUCT_SEARCH",
    search,
  };
};
