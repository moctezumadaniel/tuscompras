const initialState = {
  status: "",
  orderBy: "latest",
  minTotal: "",
  maxTotal: "",
  initialDate: "",
  finalDate: "",
  customerName: "",
};
export const SalesFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SALES_FILTERS":
      return {
        ...state,
        status: "opened",
      };
    case "CLOSE_SALES_FILTERS":
      return {
        ...state,
        status: "closed",
      };
    case "TOGGLE_SALES_FILTERS":
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
    case "CHANGE_SALES_FILTERS_ORDER":
      return {
        ...state,
        orderBy: action.order,
      };
    case "CHANGE_SALES_FILTERS_MIN_TOTAL":
      return {
        ...state,
        minTotal: action.total,
      };
    case "CHANGE_SALES_FILTERS_MAX_TOTAL":
      return {
        ...state,
        maxTotal: action.total,
      };
    case "CHANGE_SALES_FILTERS_INITIAL_DATE":
      return {
        ...state,
        initialDate: action.date,
      };
    case "CHANGE_SALES_FILTERS_FINAL_DATE":
      return {
        ...state,
        finalDate: action.date,
      };
    case "CHANGE_SALES_FILTERS_CUSTOMER_NAME":
      return {
        ...state,
        customerName: action.customerName,
      };
    default:
      return state;
  }
};
