const initialState = {
  status: "",
  orderBy: "latest",
  minTotal: "",
  maxTotal: "",
  initialDate: "",
  finalDate: "",
  sellerName: "",
};
export const PurchasesFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_PURCHASES_FILTERS":
      return {
        ...state,
        status: "opened",
      };
    case "CLOSE_PURCHASES_FILTERS":
      return {
        ...state,
        status: "closed",
      };
    case "TOGGLE_PURCHASES_FILTERS":
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
    case "CHANGE_PURCHASES_FILTERS_ORDER":
      return {
        ...state,
        orderBy: action.order,
      };
    case "CHANGE_PURCHASES_FILTERS_MIN_TOTAL":
      return {
        ...state,
        minTotal: action.total,
      };
    case "CHANGE_PURCHASES_FILTERS_MAX_TOTAL":
      return {
        ...state,
        maxTotal: action.total,
      };
    case "CHANGE_PURCHASES_FILTERS_INITIAL_DATE":
      return {
        ...state,
        initialDate: action.date,
      };
    case "CHANGE_PURCHASES_FILTERS_FINAL_DATE":
      return {
        ...state,
        finalDate: action.date,
      };
    case "CHANGE_PURCHASES_FILTERS_SELLER_NAME":
      return {
        ...state,
        sellerName: action.name,
      };
    default:
      return state;
  }
};
