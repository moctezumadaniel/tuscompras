export const changeLoginEmail = (email) => {
  return {
    type: "CHANGE_LOGIN_EMAIL",
    email,
  };
};

export const changeLoginPassword = (password) => {
  return {
    type: "CHANGE_LOGIN_PASSWORD",
    password,
  };
};
