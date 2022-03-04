import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = (props) => {
  return (
    <Auth0Provider
      domain="dev-006imb0h.us.auth0.com"
      clientId="xbsIXfMESdb6TOthfjpHhqrCis3rE6tT"
      redirectUri={window.location.origin}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;
