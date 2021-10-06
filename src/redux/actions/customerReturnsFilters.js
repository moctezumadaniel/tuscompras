export const openCustomersReturnsFilters = () => {
  return {
    type: "OPEN_CUSTOMERS_RETURNS_FILTERS",
  };
};

export const closeCustomersReturnsFilters = () => {
  return {
    type: "CLOSE_CUSTOMERS_RETURNS_FILTERS",
  };
};

export const toggleCustomersReturnsFilters = () => {
  return {
    type: "TOGGLE_CUSTOMERS_RETURNS_FILTERS",
  };
};

export const changeCustomerReturnsFiltersOrder = (order) => {
  return {
    type: "CHANGE_CUSTOMER_RETURNS_FILTERS_ORDER",
    order,
  };
};

export const changeCustomerReturnsFiltersMinTotal = (total) => {
  return {
    type: "CHANGE_CUSTOMER_RETURNS_FILTERS_MIN_TOTAL",
    total,
  };
};

export const changeCustomerReturnsFiltersMaxTotal = (total) => {
  return {
    type: "CHANGE_CUSTOMER_RETURNS_FILTERS_MAX_TOTAL",
    total,
  };
};

export const changeCustomerReturnsFiltersInitialDate = (date) => {
  return {
    type: "CHANGE_CUSTOMER_RETURNS_FILTERS_INITIAL_DATE",
    date,
  };
};

export const changeCustomerReturnsFiltersFinalDate = (date) => {
  return {
    type: "CHANGE_CUSTOMER_RETURNS_FILTERS_FINAL_DATE",
    date,
  };
};

export const changeCustomerReturnsFiltersCustomerName = (name) => {
  return {
    type: "CHANGE_CUSTOMER_RETURNS_FILTERS_NAME",
    name,
  };
};
