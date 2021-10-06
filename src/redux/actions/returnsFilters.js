export const openReturnsFilters = () => {
  return {
    type: "OPEN_RETURNS_FILTERS",
  };
};

export const closeReturnsFilters = () => {
  return {
    type: "CLOSE_RETURNS_FILTERS",
  };
};

export const toggleReturnsFilters = () => {
  return {
    type: "TOGGLE_RETURNS_FILTERS",
  };
};

export const changeReturnsFiltersOrder = (order) => {
  return {
    type: "CHANGE_RETURNS_FILTERS_ORDER",
    order,
  };
};

export const changeReturnsFiltersMinTotal = (total) => {
  return {
    type: "CHANGE_RETURNS_FILTERS_MIN_TOTAL",
    total,
  };
};

export const changeReturnsFiltersMaxTotal = (total) => {
  return {
    type: "CHANGE_RETURNS_FILTERS_MAX_TOTAL",
    total,
  };
};

export const changeReturnsFiltersInitialDate = (date) => {
  return {
    type: "CHANGE_RETURNS_FILTERS_INITIAL_DATE",
    date,
  };
};

export const changeReturnsFiltersFinalDate = (date) => {
  return {
    type: "CHANGE_RETURNS_FILTERS_FINAL_DATE",
    date,
  };
};

export const changeReturnsFiltersName = (name) => {
  return {
    type: "CHANGE_RETURNS_FILTERS_NAME",
    name,
  };
};
