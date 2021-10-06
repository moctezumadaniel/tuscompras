const initialState = {
  status: "",
  orderBy: "",
  minTotal: "",
  maxTotal: "",
  initialDate: "",
  finalDate: "",
  sellerName: "",
};
export const ReturnsFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_RETURNS_FILTERS":
      return {
        ...state,
        status: "opened",
      };
    case "CLOSE_RETURNS_FILTERS":
      return {
        ...state,
        status: "closed",
      };
    case "TOGGLE_RETURNS_FILTERS":
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
    case "CHANGE_RETURNS_FILTERS_ORDER":
      return {
        ...state,
        orderBy: action.order,
      };
    case "CHANGE_RETURNS_FILTERS_MIN_TOTAL":
      return {
        ...state,
        minTotal: action.total,
      };
    case "CHANGE_RETURNS_FILTERS_MAX_TOTAL":
      return {
        ...state,
        maxTotal: action.total,
      };
    case "CHANGE_RETURNS_FILTERS_INITIAL_DATE":
      return {
        ...state,
        initialDate: action.date,
      };
    case "CHANGE_RETURNS_FILTERS_FINAL_DATE":
      return {
        ...state,
        finalDate: action.date,
      };
    case "CHANGE_RETURNS_FILTERS_NAME":
      return {
        ...state,
        sellerName: action.name,
      };
    default:
      return state;
  }
};
