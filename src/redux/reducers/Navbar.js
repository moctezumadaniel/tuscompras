const initialState = {
  activeSearch: false,
  search: "",
};
export const NavbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PRODUCT_SEARCH":
      return {
        ...state,
        activeSearch: !state.activeSearch,
      };
    case "ACTIVATE_PRODUCT_SEARCH":
      return {
        ...state,
        activeSearch: true,
      };
    case "DEACTIVATE_PRODUCT_SEARCH":
      return {
        ...state,
        activeSearch: false,
      };
    case "CHANGE_PRODUCT_SEARCH":
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};
