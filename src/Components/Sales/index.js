import { useState } from "react";
import ProductPreview from "../ProductPreview";
import SalesFilters from "../SalesFilters";
import styles from "./Sales.module.css";
const titles = {
  seeDetails: "Ver detalles",
  closeDetails: "Cerrar detalles",
};
function Sales() {
  return (
    <div>
      <SalesFilters />
      <ListOfSales />
    </div>
  );
}
export default Sales;

function ListOfSales() {
  return (
    <div className={styles.ListOfSales}>
      <Sale
        details={{
          customerName: "Juan Daniel Trejo Moctezuma",
          amounth: 54000,
          date: "2021-10-21",
        }}
      />
      <Sale
        details={{
          customerName: "Juan Daniel Trejo Moctezuma",
          amounth: 54000,
          date: "2021-10-21",
        }}
      />
    </div>
  );
}

function Sale({ details }) {
  const [detailsStatus, setDatailsStatus] = useState(false);
  const openDetails = () => {
    setDatailsStatus(!detailsStatus);
  };
  return (
    <div className={styles.Sale}>
      <div className={styles.SaleHeader}>
        <div className={styles.SaleTitle}>
          {`${details.customerName} ${details.amounth} ${details.date}`}
        </div>
        <div className={styles.SBDContainer}>
          <button
            className={styles.SaleButtonDetails}
            onClick={() => openDetails()}
          >
            {!detailsStatus ? titles.seeDetails : titles.closeDetails}
          </button>
        </div>
      </div>
      {detailsStatus ? (
        <div className={styles.SaleDetails}>
          <ProductPreview
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"
          />

          <ProductPreview
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
