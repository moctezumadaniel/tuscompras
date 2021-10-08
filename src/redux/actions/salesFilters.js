export const openSalestFilters = () => {
  return {
    type: "OPEN_SALES_FILTERS",
  };
};

export const closeSalesFilters = () => {
  return {
    type: "CLOSE_SALES_FILTERS",
  };
};

export const toggleSalesFilters = () => {
  return {
    type: "TOGGLE_SALES_FILTERS",
  };
};

export const changeSalesFiltersOrder = (order) => {
  return {
    type: "CHANGE_SALES_FILTERS_ORDER",
    order,
  };
};

export const changeSalesFiltersMinTotal = (total) => {
  return {
    type: "CHANGE_SALES_FILTERS_MIN_TOTAL",
    total,
  };
};

export const changeSalesFiltersMaxTotal = (total) => {
  return {
    type: "CHANGE_SALES_FILTERS_MAX_TOTAL",
    total,
  };
};

export const changeSalesFiltersInitialDate = (date) => {
  return {
    type: "CHANGE_SALES_FILTERS_INITIAL_DATE",
    date,
  };
};

export const changeSalesFiltersFinalDate = (date) => {
  return {
    type: "CHANGE_SALES_FILTERS_FINAL_DATE",
    date,
  };
};

export const changeSalesFiltersCustomerName = (customerName) => {
  return {
    type: "CHANGE_SALES_FILTERS_CUSTOMER_NAME",
    customerName,
  };
};
