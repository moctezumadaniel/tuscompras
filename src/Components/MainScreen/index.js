import styles from "./MainScreen.module.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar";
import MainMenu from "../MainMenu";
import { useAuth0 } from "@auth0/auth0-react";
const ListOfProducts = React.lazy(() => import("../ListOfProducts"));
const UserProducts = React.lazy(() => import("../UserProducts"));
const CustomersReturns = React.lazy(() => import("../CustomersReturns"));
const CustomersMessages = React.lazy(() => import("../CustomersMessages"));
const Purchases = React.lazy(() => import("../Purchases"));
const Returns = React.lazy(() => import("../Returns"));
const SellersMessages = React.lazy(() => import("../SellersMessages"));
const Profile = React.lazy(() => import("../Profile"));
const Security = React.lazy(() => import("../Security"));
const ProductSettings = React.lazy(() => import("../ProductSettings"));
const Sales = React.lazy(() => import("../Sales"));
const ProductPage = React.lazy(() => import("../ProductPage"));
const Login = React.lazy(() => import("../Login"));

export default function MainScreen() {
  const { isAuthenticated, isLoading } = useAuth0();
  const loggedIn = isAuthenticated && !isLoading ? true : false;
  return (
    <React.Suspense fallback={<Navbar />}>
      <Router>
        <div className={styles.MainScreenContainer} id="Main">
          <Navbar />
          <MainMenu />

          <Switch>
            <Route path="/productos">
              {loggedIn ? <UserProducts /> : isLoading ? "" : <LoginMessage />}
            </Route>

            <Route path="/devoluciones-de-clientes">
              {loggedIn ? (
                <CustomersReturns />
              ) : isLoading ? (
                ""
              ) : (
                <LoginMessage />
              )}
            </Route>

            <Route path="/mensajes-de-clientes">
              {loggedIn ? (
                <CustomersMessages />
              ) : isLoading ? (
                ""
              ) : (
                <LoginMessage />
              )}
            </Route>

            <Route path="/compras">
              {loggedIn ? <Purchases /> : isLoading ? "" : <LoginMessage />}
            </Route>

            <Route path="/devoluciones">
              {loggedIn ? <Returns /> : isLoading ? "" : <LoginMessage />}
            </Route>

            <Route path="/mensajes-de-vendedores">
              {loggedIn ? (
                <SellersMessages />
              ) : isLoading ? (
                ""
              ) : (
                <LoginMessage />
              )}
            </Route>

            <Route path="/perfil">
              {loggedIn ? <Profile /> : isLoading ? "" : <LoginMessage />}
            </Route>

            <Route path="/seguridad">
              {loggedIn ? <Security /> : isLoading ? "" : <LoginMessage />}
            </Route>

            <Route path="/ventas">
              {loggedIn ? <Sales /> : isLoading ? "" : <LoginMessage />}
            </Route>

            <Route path="/vender">
              {loggedIn ? (
                <ProductSettings />
              ) : isLoading ? (
                ""
              ) : (
                <LoginMessage />
              )}
            </Route>

            <Route path="/producto">
              {loggedIn ? <ProductPage /> : isLoading ? "" : <LoginMessage />}
            </Route>

            <Route path="/iniciar-sesion">
              <Login />
            </Route>

            <Route path="/">
              <ListOfProducts />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
}

const LoginMessage = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <div className={styles.LoginContainer}>
      <button onClick={loginWithPopup} className={styles.LoginButton}>
        Inicia sesión para acceder a esta página
      </button>
    </div>
  );
};
