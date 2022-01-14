const initialState = {
  shortDescription: "",
  completeDescription: "",
  images: [],
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
        images: [
          ...state.images,
          { image: action.image, id: new Date().getTime() },
        ],
      };
    case "DELETE_PRODUCT_SETTINGS_IMAGE":
      return {
        ...state,
        images: state.images.filter((i) => i.id !== action.id),
      };
    case "CHANGE_PRODUCT_SETTINGS_IMAGE":
      return {
        ...state,
        images: state.images.map((i) => {
          if (i.id === action.id) return { id: action.id, image: action.image };
          return i;
        }),
      };
    default:
      return state;
  }
};
