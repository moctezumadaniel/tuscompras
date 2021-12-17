import { useDispatch, useSelector } from "react-redux";
import {
  changePurchasesFiltersFinalDate,
  changePurchasesFiltersInitialDate,
  changePurchasesFiltersMaxTotal,
  changePurchasesFiltersMinTotal,
  changePurchasesFiltersOrder,
  changePurchasesFiltersSellerName,
  togglePurchasesFilters,
} from "../../redux/actions/purchasesFilters";
import styles from "./PurchasesFilters.module.css";
const titles = {
  openFilters: "Filtrar Compras",
  applyFilters: "Aplicar y cerrar filtros",
  orderBy: "Ordenar por:",
  totalRange: "Rango de totales:",
  // ORDER BY
  latest: "Más recientes",
  oldest: "Más antiguos",
  greatestTotal: "Mayor total",
  lowestTotal: "Menor total",
  // PRICE
  minTotal: "Desde",
  maxTotal: "Hasta",
  //PERIODS
  period: "Rango de fechas",
  // CUSTOMER NAME
  sellerName: "Del vendedor:",
  sellerNamePlaceholder: "Nombre del vendedor a buscar",
};
function PurchasesFilters() {
  const filters = useSelector((state) => state.PurchasesFilters);
  const dispatch = useDispatch();
  console.log(filters);
  const openCloseFilters = () => {
    dispatch(togglePurchasesFilters());
  };
  return (
    <div className={styles.FiltersContainer}>
      <button
        className={styles.FilterButton}
        onClick={() => openCloseFilters()}
      >
        <i class="bi bi-funnel-fill" style={{ marginRight: "10px" }}></i>
        {filters.status === "opened" ? titles.applyFilters : titles.openFilters}
      </button>

      <ListOfFilters filters={filters} />
    </div>
  );
}
export default PurchasesFilters;

function ListOfFilters({ filters }) {
  const dispatch = useDispatch();
  function changeOrder(event) {
    dispatch(changePurchasesFiltersOrder(event.target.value));
  }
  function changeMinTotal(event) {
    dispatch(changePurchasesFiltersMinTotal(event.target.value));
  }
  function changeMaxTotal(event) {
    dispatch(changePurchasesFiltersMaxTotal(event.target.value));
  }
  function changeInitialDate(event) {
    dispatch(changePurchasesFiltersInitialDate(event.target.value));
  }
  function changeFinalDate(event) {
    dispatch(changePurchasesFiltersFinalDate(event.target.value));
  }
  function changeSellerName(event) {
    dispatch(changePurchasesFiltersSellerName(event.target.value));
  }
  if (filters.status === "opened")
    return (
      <div className={styles.ListOfFilters}>
        {/* ORDER */}
        <div className={styles.OrderContainer}>
          <div className={styles.FilterTitle}>{titles.orderBy}</div>
          <select
            value={filters.orderBy}
            className={styles.SelectInput}
            onChange={changeOrder}
          >
            <option value="latest">{titles.latest}</option>
            <option value="oldest">{titles.oldest}</option>
            <option value="greatestTotal">{titles.greatestTotal}</option>
            <option value="lowestTotal">{titles.lowestTotal}</option>
          </select>
        </div>
        {/* TOTAL */}
        <div className={styles.PriceContainer}>
          <div className={styles.FilterTitle}>{titles.totalRange}</div>

          <input
            className={styles.AmounthInput}
            placeholder={titles.minTotal}
            onChange={changeMinTotal}
            value={filters.minTotal}
            type="number"
          />
          <input
            className={styles.AmounthInput}
            placeholder={titles.maxTotal}
            onChange={changeMaxTotal}
            value={filters.maxTotal}
            type="number"
          />
        </div>
        {/* PERIOD */}
        <div className={styles.PriceContainer}>
          <div className={styles.FilterTitle}>{titles.period}</div>

          <input
            className={styles.DatesInput}
            placeholder={titles.minTotal}
            onChange={changeInitialDate}
            value={filters.initialDate}
            type="date"
          />
          <input
            className={styles.DatesInput}
            placeholder={titles.maxTotal}
            onChange={changeFinalDate}
            value={filters.finalDate}
            type="date"
          />
        </div>
        {/* SELLER NAME */}
        <div className={styles.RatingContainer}>
          <div className={styles.FilterTitle}>{titles.sellerName}</div>
          <input
            type="search"
            className={styles.SearchInput}
            placeholder={titles.sellerNamePlaceholder}
            onChange={changeSellerName}
            value={filters.sellerName}
          />
        </div>
      </div>
    );
  else return "";
}
