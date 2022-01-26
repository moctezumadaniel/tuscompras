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
  return (
    <div className={styles.MainContainer}>
      <div className={styles.LoginContainer}>
        <div className={styles.MainTitle}>{titles.loginTitle}</div>
        <input
          type="email"
          className={styles.LoginInput}
          placeholder={titles.email}
        />
        <input
          type="password"
          className={styles.LoginInput}
          placeholder={titles.password}
        />

        <button className={styles.Login}>{titles.login}</button>
      </div>

      <div className={styles.LoginContainer}>
        <div className={styles.MainTitle}>{titles.signupTitle}</div>
        <input
          type="email"
          className={styles.LoginInput}
          placeholder={titles.email}
        />
        <input
          type="password"
          className={styles.LoginInput}
          placeholder={titles.password}
        />

        <button className={styles.Login}>{titles.signup}</button>
      </div>
    </div>
  );
}
