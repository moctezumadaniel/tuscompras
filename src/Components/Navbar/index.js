import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {
  setMainMenuToClose,
  setMainMenuToOpen,
} from "../../redux/actions/mainMenu";
import {
  activateProductSearch,
  changeProductSearch,
  deactivateProductSearch,
} from "../../redux/actions/navbar";
import styles from "./Navbar.module.css";
const titles = {
  sell: "Vender mi producto",
  login: "Iniciar sesion",
};

export default function Navbar() {
  const navbarState = useSelector((state) => state.Navbar);
  const searchState = navbarState.activeSearch;
  const search = navbarState.search;
  const { isAuthenticated, isLoading } = useAuth0();
  const menuStatus = useSelector((state) => state.MainMenu.status);
  const dispatch = useDispatch();
  function activateSearch() {
    window.scrollTo(0, 0);
    if (menuStatus === "opened" && window.innerWidth < 500) {
      dispatch(setMainMenuToClose());
      document.getElementById("body").style.overflow = "visible";
    }
    dispatch(activateProductSearch());
  }
  function changeSearch(event) {
    dispatch(changeProductSearch(event.target.value));
  }
  function deactivateSearch() {
    dispatch(deactivateProductSearch());
  }
  return (
    <div className={styles.NavbarContainer}>
      <MenuButton />

      <a className={searchState ? styles.LogoSA : styles.Logo} href="/">
        TusCompras
      </a>

      <button
        className={
          searchState ? styles.CloseSearchButtonSA : styles.CloseSearchButton
        }
        onClick={deactivateSearch}
      >
        <i class="bi bi-arrow-left-short" style={{ fontSize: "40px" }}></i>
      </button>

      <input
        type="search"
        onClick={activateSearch}
        onFocus={activateSearch}
        onBlur={deactivateSearch}
        className={searchState ? styles.SearchBarSA : styles.SearchBar}
        onChange={changeSearch}
        value={search}
        placeholder="Buscar"
      />
      {isAuthenticated && !isLoading && (
        <a className={styles.SellProductButton} href="vender">
          {titles.sell}
        </a>
      )}
      {!isAuthenticated && !isLoading && (
        <a className={styles.LogInAndOut} href="iniciar-sesion">
          {titles.login}
        </a>
      )}
    </div>
  );
}

function MenuButton() {
  const menuStatus = useSelector((state) => state.MainMenu.status);
  const searchState = useSelector((state) => state.Navbar.activeSearch);
  const body = document.getElementById("body");
  const currentUrl = window.location.pathname;
  const dispatch = useDispatch();
  const openMainMenu = () => {
    dispatch(setMainMenuToOpen());
    body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  };
  const closeMainMenu = () => {
    dispatch(setMainMenuToClose());
    if (
      currentUrl !== "/mensajes-de-vendedores" &&
      currentUrl !== "/mensajes-de-clientes"
    )
      body.style.overflow = "visible";
  };

  if (menuStatus === "opened") {
    return (
      <button
        className={
          searchState ? styles.MainMenuButtonSA : styles.MainMenuButton
        }
        onClick={() => closeMainMenu()}
      >
        <i class="bi bi-x" style={{ fontSize: "40px" }}></i>
      </button>
    );
  } else
    return (
      <button
        className={
          searchState ? styles.MainMenuButtonSA : styles.MainMenuButton
        }
        onClick={() => openMainMenu()}
      >
        <i class="bi bi-list MainMenuIcon" style={{ fontSize: "40px" }}></i>
      </button>
    );
}
