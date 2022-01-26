import { useDispatch, useSelector } from "react-redux";
import {
  changeLoginEmail,
  changeLoginPassword,
} from "../../redux/actions/login";
import {
  changeSignupEmail,
  changeSignupPassword,
} from "../../redux/actions/signup";
import styles from "./Login.module.css";

const titles = {
  loginTitle: "Inicia sesión para acceder a todas las funciones",
  email: "Escribe tu correo electrónico",
  password: "Escribe tu contraseña",
  login: "Iniciar sesión",
  signupTitle: "Crea una cuenta para acceder a todas las funciones",
  signup: "Crear cuenta",
};
export default function Login() {
  const signupState = useSelector((state) => state.Signup);
  const loginState = useSelector((state) => state.Login);
  const dispatch = useDispatch();

  const updateLogin = (event) => {
    if (event.target.name === "loginEmail") {
      dispatch(changeLoginEmail(event.target.value));
    }
    if (event.target.name === "loginPassword") {
      dispatch(changeLoginPassword(event.target.value));
    }
  };

  const updateSignup = (event) => {
    if (event.target.name === "signupEmail") {
      dispatch(changeSignupEmail(event.target.value));
    }
    if (event.target.name === "signupPassword") {
      dispatch(changeSignupPassword(event.target.value));
    }
  };
  return (
    <div className={styles.MainContainer}>
      <div className={styles.LoginContainer}>
        <div className={styles.MainTitle}>{titles.loginTitle}</div>
        <input
          type="email"
          name="loginEmail"
          className={styles.LoginInput}
          placeholder={titles.email}
          value={loginState.loginEmail}
          onChange={(e) => updateLogin(e)}
        />
        <input
          type="password"
          name="loginPassword"
          className={styles.LoginInput}
          placeholder={titles.password}
          value={loginState.loginPassword}
          onChange={(e) => updateLogin(e)}
        />

        <button className={styles.Login}>{titles.login}</button>
      </div>

      <div className={styles.LoginContainer}>
        <div className={styles.MainTitle}>{titles.signupTitle}</div>
        <input
          type="email"
          name="signupEmail"
          className={styles.LoginInput}
          placeholder={titles.email}
          value={signupState.signupEmail}
          onChange={(e) => updateSignup(e)}
        />
        <input
          type="password"
          name="signupPassword"
          className={styles.LoginInput}
          placeholder={titles.password}
          value={signupState.signupPassword}
          onChange={(e) => updateSignup(e)}
        />

        <button className={styles.Login}>{titles.signup}</button>
      </div>
    </div>
  );
}
