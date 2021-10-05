import { useDispatch, useSelector } from "react-redux";
import { toggleSalesFilters } from "../../redux/actions/salesFilters";
import styles from "./SalesFilters.module.css";
const titles = {
  openFilters: "Filtrar Ventas",
  applyFilters: "Aplicar y cerrar filtros",
  orderBy: "Ordenar por:",
  totalRange: "Rango de totales:",
  period: "Rango de fechas",
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
function SalesFilters() {
  const filters = useSelector((state) => state.SalesFilters);
  const dispatch = useDispatch();
  console.log(filters);
  const openCloseFilters = () => {
    dispatch(toggleSalesFilters());
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
export default SalesFilters;

function ListOfFilters({ filters }) {
  if (filters.status === "opened")
    return (
      <div className={styles.ListOfFilters}>
        {/* ORDER */}
        <div className={styles.OrderContainer}>
          <div className={styles.FilterTitle}>{titles.orderBy}</div>
          <select className={styles.SelectInput}>
            <option>{titles.latest}</option>
            <option>{titles.oldest}</option>
            <option>{titles.greatestTotal}</option>
            <option>{titles.lowestTotal}</option>
          </select>
        </div>
        {/* TOTAL */}
        <div className={styles.PriceContainer}>
          <div className={styles.FilterTitle}>{titles.totalRange}</div>

          <input
            className={styles.AmounthInput}
            placeholder={titles.minTotal}
            type="number"
          />
          <input
            className={styles.AmounthInput}
            placeholder={titles.maxTotal}
            type="number"
          />
        </div>
        {/* DATES */}
        <div className={styles.PriceContainer}>
          <div className={styles.FilterTitle}>{titles.period}</div>

          <input
            className={styles.DatesInput}
            placeholder={titles.minTotal}
            type="date"
          />
          <input
            className={styles.DatesInput}
            placeholder={titles.maxTotal}
            type="date"
          />
        </div>
        {/* RATING */}
        <div className={styles.RatingContainer}>
          <div className={styles.FilterTitle}>{titles.customerName}</div>
          <input
            type="search"
            className={styles.SearchInput}
            placeholder={titles.customerNamePlaceholder}
          />
        </div>
      </div>
    );
  else return "";
}
