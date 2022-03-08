import CustomersReturnsFilters from "../CustomersReturnsFilters";
import ProductPreview from "../ProductPreview";
import styles from "./CustomersReturns.module.css";
function CustomersReturns() {
  return (
    <div>
      <CustomersReturnsFilters />
      <CustomersReturnsList />
    </div>
  );
}
export default CustomersReturns;

function CustomersReturnsList() {
  return (
    <div className={styles.CustomersReturnsList}>
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

      <ProductPreview
        title="ejemplo largo de la descripcion de un producto"
        price="50000"
        review="10/10"
      />
    </div>
  );
}
