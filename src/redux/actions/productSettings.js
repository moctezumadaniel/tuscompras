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
