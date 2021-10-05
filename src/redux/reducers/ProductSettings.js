const initialState = {
  shortDescription: "",
  completeDescription: "",
};
export const ProductSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PRODUCT_SETTINGS_SHORT_DESCRIPTION":
      return {
        ...state,
        shortDescription: action.description,
      };
    case "CHANGE_PRODUCT_SETTINGS_COMPLETE_DESCRIPTION":
      return {
        ...state,
        completeDescription: action.description,
      };
    default:
      return state;
  }
};
