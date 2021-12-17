const initialState = {
  status: "",
  orderBy: "MostImportant",
  priceFrom: "",
  priceTo: "",
  ratedWith: "everyRating",
};
export const ProductFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_PRODUCT_FILTERS":
      return {
        ...state,
        status: "opened",
      };
    case "CLOSE_PRODUCT_FILTERS":
      return {
        ...state,
        status: "closed",
      };
    case "TOGGLE_PRODUCT_FILTERS":
      if (!state.status || state.status === "closed") {
        return {
          ...state,
          status: "opened",
        };
      } else if (state.status === "opened") {
        return {
          ...state,
          status: "closed",
        };
      }
      break;
    case "CHANGE_PRODUCT_FILTERS_ORDER":
      return {
        ...state,
        orderBy: action.order,
      };
    case "CHANGE_PRODUCT_FILTERS_PRICE_FROM":
      return {
        ...state,
        priceFrom: action.price,
      };
    case "CHANGE_PRODUCT_FILTERS_PRICE_TO":
      return {
        ...state,
        priceTo: action.price,
      };
    case "CHANGE_PRODUCT_FILTERS_RATED_WITH":
      return {
        ...state,
        ratedWith: action.rating,
      };
    default:
      return state;
  }
};
