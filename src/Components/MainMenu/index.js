import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { setMainMenuToClose } from "../../redux/actions/mainMenu";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./MainMenu.module.css";
const titles = {
  sell: "Vender mi producto",
  login: "Iniciar sesión",
  sales: "Ventas",
  products: "Mis productos",
  salesList: "Lista de ventas",
  buyersReturns: "Devoluciones de clientes",
  buyersMessages: "Mensajes de compradores",

  purchases: "Compras",
  purchasesList: "Lista de compras",
  returns: "Mis devoluciones",
  sellersMessages: "Mensajes con vendedores",

  profile: "Perfil",
  profileName: "Nombre y datos",
  addresses: "Direcciones",
  security: "Contraseña y seguridad",
  logout: "Cerrar sesión",

  loginDialoge: "Inicia sesión para acceder al resto de funcionalidades",
};

export default function MainMenu() {
  const menuStatus = useSelector((state) => state.MainMenu.status);
  const { isLoading, isAuthenticated } = useAuth0();
  const loggedIn = isAuthenticated && !isLoading ? true : false;
  if (menuStatus === "opened")
    return <>{loggedIn ? <LoggedInMenu /> : <LoggedOutMenu />}</>;
  else return "";
}

const LoggedInMenu = () => {
  const menuStatus = useSelector((state) => state.MainMenu.status);
  const body = document.getElementById("body");
  const currentUrl = window.location.pathname;
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const closeMainMenu = () => {
    dispatch(setMainMenuToClose());
    if (
      currentUrl !== "/mensajes-de-vendedores" &&
      currentUrl !== "/mensajes-de-clientes"
    )
      body.style.overflow = "visible";
  };
  console.log(menuStatus);
  return (
    <Router>
      <div
        className={
          menuStatus === "opened"
            ? styles.menuContainer
            : styles.menuContainerHided
        }
      >
        <ul
          className={
            menuStatus === "opened" ? styles.menuCanvas : styles.menuCanvasHided
          }
        >
          <a className={styles.SellProductButton} href="/vender">
            {titles.sell}
          </a>

          <li>
            <h3>{titles.sales}</h3>
          </li>

          <li>
            <a
              className={styles.link}
              href="/productos"
              onClick={() => closeMainMenu()}
            >
              {titles.products}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="/ventas"
              onClick={() => closeMainMenu()}
            >
              {titles.salesList}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="/devoluciones-de-clientes"
              onClick={() => closeMainMenu()}
            >
              {titles.buyersReturns}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="/mensajes-de-clientes"
              onClick={() => closeMainMenu()}
            >
              {titles.buyersMessages}
            </a>
          </li>

          <li>
            <h3>{titles.purchases}</h3>
          </li>

          <li>
            <a
              className={styles.link}
              href="/compras"
              onClick={() => closeMainMenu()}
            >
              {titles.purchasesList}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="/devoluciones"
              onClick={() => closeMainMenu()}
            >
              {titles.returns}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="/mensajes-de-vendedores"
              onClick={() => closeMainMenu()}
            >
              {titles.sellersMessages}
            </a>
          </li>
          <li>
            <h3>{titles.profile}</h3>
          </li>

          <li>
            <a
              className={styles.link}
              href="/perfil"
              onClick={() => closeMainMenu()}
            >
              {titles.profileName}
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="/seguridad"
              onClick={() => closeMainMenu()}
            >
              {titles.security}
            </a>
          </li>

          <li>
            <button className={styles.Logout} onClick={logout}>
              {titles.logout}
            </button>
          </li>
        </ul>
        <div
          className={
            menuStatus === "opened"
              ? styles.menuBackground
              : styles.menuBackgroundHided
          }
          onClick={() => closeMainMenu()}
        ></div>
      </div>
    </Router>
  );
};

const LoggedOutMenu = () => {
  const { loginWithPopup } = useAuth0();
  const dispatch = useDispatch();
  const body = document.getElementById("body");
  const currentUrl = window.location.pathname;
  const closeMainMenu = () => {
    dispatch(setMainMenuToClose());
    if (
      currentUrl !== "/mensajes-de-vendedores" &&
      currentUrl !== "/mensajes-de-clientes"
    )
      body.style.overflow = "visible";
  };
  const menuStatus = useSelector((state) => state.MainMenu.status);
  console.log(menuStatus);
  return (
    <Router>
      <div
        className={
          menuStatus === "opened"
            ? styles.menuContainer
            : styles.menuContainerHided
        }
      >
        <ul
          className={
            menuStatus === "opened" ? styles.menuCanvas : styles.menuCanvasHided
          }
        >
          <button className={styles.LogInAndOut} onClick={loginWithPopup}>
            {titles.login}
          </button>

          <p className={styles.Dialoge}>{titles.loginDialoge}</p>
        </ul>
        <div
          className={
            menuStatus === "opened"
              ? styles.menuBackground
              : styles.menuBackgroundHided
          }
          onClick={() => closeMainMenu()}
        ></div>
      </div>
    </Router>
  );
};
