export const openProductFilters = () => {
  return {
    type: "OPEN_PRODUCT_FILTERS",
  };
};

export const closeProductFilters = () => {
  return {
    type: "CLOSE_PRODUCT_FILTERS",
  };
};

export const toggleProductFilters = () => {
  return {
    type: "TOGGLE_PRODUCT_FILTERS",
  };
};

export const changeProductFiltersOrder = (order) => {
  return {
    type: "CHANGE_PRODUCT_FILTERS_ORDER",
    order,
  };
};

export const changeProductFiltersPriceFrom = (price) => {
  return {
    type: "CHANGE_PRODUCT_FILTERS_PRICE_FROM",
    price,
  };
};

export const changeProductFiltersPriceTo = (price) => {
  return {
    type: "CHANGE_PRODUCT_FILTERS_PRICE_TO",
    price,
  };
};

export const changeProductFiltersRatedWith = (rating) => {
  return {
    type: "CHANGE_PRODUCT_FILTERS_RATED_WITH",
    rating,
  };
};
