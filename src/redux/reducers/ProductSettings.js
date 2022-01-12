const initialState = {
  shortDescription: "",
  completeDescription: "",
  image: null,
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
    case "ADD_PRODUCT_SETTINGS_IMAGE":
      return {
        ...state,
        image: action.image,
      };
    default:
      return state;
  }
};
