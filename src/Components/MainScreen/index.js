import styles from "./MainScreen.module.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar";
import MainMenu from "../MainMenu";

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

export default function MainScreen() {
  return (
    <React.Suspense fallback={<span>Cargando...</span>}>
      <Router>
        <div className={styles.MainScreenContainer} id="Main">
          <Navbar />
          <MainMenu />

          <Switch>
            <Route path="/productos">
              <UserProducts />
            </Route>

            <Route path="/devoluciones-de-clientes">
              <CustomersReturns />
            </Route>

            <Route path="/mensajes-de-clientes">
              <CustomersMessages />
            </Route>

            <Route path="/compras">
              <Purchases />
            </Route>

            <Route path="/devoluciones">
              <Returns />
            </Route>

            <Route path="/mensajes-de-vendedores">
              <SellersMessages />
            </Route>

            <Route path="/perfil">
              <Profile />
            </Route>

            <Route path="/seguridad">
              <Security />
            </Route>

            <Route path="/ventas">
              <Sales />
            </Route>

            <Route path="/vender">
              <ProductSettings />
            </Route>

            <Route path="/producto">
              <ProductPage />
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
