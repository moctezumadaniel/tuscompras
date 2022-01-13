export const changeProductSettingsShortDescription = (description) => {
  return {
    type: "CHANGE_PRODUCT_SETTINGS_SHORT_DESCRIPTION",
    description,
  };
};

export const changeProductSettingsCompleteDescription = (description) => {
  return {
    type: "CHANGE_PRODUCT_SETTINGS_COMPLETE_DESCRIPTION",
    description,
  };
};

export const addProductSettingsImage = (image) => {
  return {
    type: "ADD_PRODUCT_SETTINGS_IMAGE",
    image,
  };
};

export const deleteProductSettingsImage = (id) => {
  return {
    type: "DELETE_PRODUCT_SETTINGS_IMAGE",
    id,
  };
};
