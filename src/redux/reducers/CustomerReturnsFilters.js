const initialState = {
  status: "",
  orderBy: "",
  minTotal: "",
  maxTotal: "",
  initialDate: "",
  finalDate: "",
  customerName: "",
};
export const CustomersReturnsFiltersReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "OPEN_CUSTOMERS_RETURNS_FILTERS":
      return {
        ...state,
        status: "opened",
      };
    case "CLOSE_CUSTOMERS_RETURNS_FILTERS":
      return {
        ...state,
        status: "closed",
      };
    case "TOGGLE_CUSTOMERS_RETURNS_FILTERS":
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
