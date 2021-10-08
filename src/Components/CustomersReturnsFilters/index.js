import { useDispatch, useSelector } from "react-redux";
import {
  changeCustomerReturnsFiltersCustomerName,
  changeCustomerReturnsFiltersFinalDate,
  changeCustomerReturnsFiltersInitialDate,
  changeCustomerReturnsFiltersMaxTotal,
  changeCustomerReturnsFiltersMinTotal,
  changeCustomerReturnsFiltersOrder,
  toggleCustomersReturnsFilters,
} from "../../redux/actions/customerReturnsFilters";
import styles from "./CustomersReturnsFilters.module.css";
const titles = {
  openFilters: "Filtrar Devoluciones",
  applyFilters: "Aplicar y cerrar filtros",
  orderBy: "Ordenar por:",
  totalRange: "Rango de totales:",
  datesRange: "Rango de fechas",
  ratedWith: "Calificados como",
  // ORDER BY
  latest: "Más recientes",
  oldest: "Más antiguos",
  greatestTotal: "Mayor total",
  lowestTotal: "Menor total",
  // PRICE
  minTotal: "Desde",
  maxTotal: "Hasta",
  // CUSTOMER NAME
  customerName: "Del cliente:",
  customerNamePlaceholder: "Nombre del cliente a buscar",
};
function CustomersReturnsFilters() {
  const filters = useSelector((state) => state.CustomersReturnsFilters);
  const dispatch = useDispatch();
  console.log(filters);
  const openCloseFilters = () => {
    dispatch(toggleCustomersReturnsFilters());
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
export default CustomersReturnsFilters;

function ListOfFilters({ filters }) {
  const dispatch = useDispatch();
  function changeOrder(event) {
    dispatch(changeCustomerReturnsFiltersOrder(event.target.value));
  }
  function changeMinTotal(event) {
    dispatch(changeCustomerReturnsFiltersMinTotal(event.target.value));
  }
  function changeMaxTotal(event) {
    dispatch(changeCustomerReturnsFiltersMaxTotal(event.target.value));
  }
  function changeInitialDate(event) {
    dispatch(changeCustomerReturnsFiltersInitialDate(event.target.value));
  }
  function changeFinalDate(event) {
    dispatch(changeCustomerReturnsFiltersFinalDate(event.target.value));
  }
  function changeCustomerName(event) {
    dispatch(changeCustomerReturnsFiltersCustomerName(event.target.value));
  }
  if (filters.status === "opened")
    return (
      <div className={styles.ListOfFilters}>
        {/* ORDER */}
        <div className={styles.OrderContainer}>
          <div className={styles.FilterTitle}>{titles.orderBy}</div>
          <select className={styles.SelectInput} onChange={changeOrder}>
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
          <div className={styles.FilterTitle}>{titles.datesRange}</div>

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
        {/* CUSTOMER */}
        <div className={styles.RatingContainer}>
          <div className={styles.FilterTitle}>{titles.customerName}</div>
          <input
            type="text"
            className={styles.SearchInput}
            placeholder={titles.customerNamePlaceholder}
            onChange={changeCustomerName}
            value={filters.customerName}
          />
        </div>
      </div>
    );
  else return "";
}
