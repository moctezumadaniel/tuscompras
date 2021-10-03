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
    default:
      return state;
  }
};
