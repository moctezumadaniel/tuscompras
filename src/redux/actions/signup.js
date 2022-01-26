export const changeSignupEmail = (email) => {
  return {
    type: "CHANGE_SIGNUP_EMAIL",
    email,
  };
};

export const changeSignupPassword = (password) => {
  return {
    type: "CHANGE_SIGNUP_PASSWORD",
    password,
  };
};
