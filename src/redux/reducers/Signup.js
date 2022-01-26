const initialState = {
  signupEmail: "",
  signupPassword: "",
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_SIGNUP_EMAIL":
      return {
        ...state,
        signupEmail: action.email,
      };
    case "CHANGE_SIGNUP_PASSWORD":
      return {
        ...state,
        signupPassword: action.password,
      };
    default:
      return state;
  }
};
