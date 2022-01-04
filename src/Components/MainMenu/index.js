import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { setMainMenuToClose } from "../../redux/actions/mainMenu";
import styles from "./MainMenu.module.css";
const titles = {
  sell: "Vender mi producto",

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
};

export default function MainMenu() {
  const menuStatus = useSelector((state) => state.MainMenu.status);
  const currentUrl = window.location.pathname;
  const dispatch = useDispatch();
  const body = document.getElementById("body");
  const closeMainMenu = () => {
    dispatch(setMainMenuToClose());
    if (
      currentUrl !== "/mensajes-de-vendedores" &&
      currentUrl !== "/mensajes-de-clientes"
    )
      body.style.overflow = "visible";
  };
  if (menuStatus === "opened")
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
              menuStatus === "opened"
                ? styles.menuCanvas
                : styles.menuCanvasHided
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
  else return "";
}
