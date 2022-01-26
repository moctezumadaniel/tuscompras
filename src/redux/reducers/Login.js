const initialState = {
  loginEmail: "",
  loginPassword: "",
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN_EMAIL":
      return {
        ...state,
        loginEmail: action.email,
      };
    case "CHANGE_LOGIN_PASSWORD":
      return {
        ...state,
        loginPassword: action.password,
      };
    default:
      return state;
  }
};
