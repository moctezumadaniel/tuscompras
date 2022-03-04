import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ReduxProvider from "./Components/ReduxProvider";
import AuthProvider from "./Components/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
