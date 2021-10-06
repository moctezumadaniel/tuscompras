export const openPurchasesFilters = () => {
  return {
    type: "OPEN_PURCHASES_FILTERS",
  };
};

export const closePurchasesFilters = () => {
  return {
    type: "CLOSE_PURCHASES_FILTERS",
  };
};

export const togglePurchasesFilters = () => {
  return {
    type: "TOGGLE_PURCHASES_FILTERS",
  };
};

export const changePurchasesFiltersOrder = (order) => {
  return {
    type: "CHANGE_PURCHASES_FILTERS_ORDER",
    order,
  };
};

export const changePurchasesFiltersMinTotal = (total) => {
  return {
    type: "CHANGE_PURCHASES_FILTERS_MIN_TOTAL",
    total,
  };
};

export const changePurchasesFiltersMaxTotal = (total) => {
  return {
    type: "CHANGE_PURCHASES_FILTERS_MAX_TOTAL",
    total,
  };
};

export const changePurchasesFiltersInitialDate = (date) => {
  return {
    type: "CHANGE_PURCHASES_FILTERS_INITIAL_DATE",
    date,
  };
};

export const changePurchasesFiltersFinalDate = (date) => {
  return {
    type: "CHANGE_PURCHASES_FILTERS_FINAL_DATE",
    date,
  };
};

export const changePurchasesFiltersSellerName = (name) => {
  return {
    type: "CHANGE_PURCHASES_FILTERS_SELLER_NAME",
    name,
  };
};
