import { useDispatch, useSelector } from "react-redux";
import {
  changeProductFiltersOrder,
  changeProductFiltersPriceFrom,
  changeProductFiltersPriceTo,
  changeProductFiltersRatedWith,
  toggleProductFilters,
} from "../../redux/actions/productFilters";
import styles from "./ProductFilters.module.css";
const titles = {
  openFilters: "Filtrar Productos",
  applyFilters: "Aplicar y cerrar filtros",
  orderBy: "Ordenar por:",
  priceRange: "Rango de precios:",
  priceFrom: "Desde:",
  priceTo: "Hasta:",
  ratedWith: "Calificados como",
  // ORDER BY
  orderByCheaper: "Más baratos",
  orderByMostExpensive: "Más caros",
  orderByBestRated: "Mejor calificados",
  orderByMostImportant: "Más importantes",
  // PRICE
  minPrice: "Desde",
  maxPrice: "Hasta",
  // RATED WITH
  ratedTen: "Solo 10/10",
  ratedNine: "9/10 y superiores",
  ratedEight: "8/10 y superiores",
  ratedSeven: "7/10 y superiores",
  ratedSix: "6/10 y superiores",
  everyRating: "Cualquier calificacion",
};
function ProductFilters() {
  const filters = useSelector((state) => state.ProductFilters);
  const dispatch = useDispatch();
  console.log(filters);
  const openCloseFilters = () => {
    dispatch(toggleProductFilters());
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

      <ListOfFilters />
    </div>
  );
}
export default ProductFilters;

function ListOfFilters() {
  const filters = useSelector((state) => state.ProductFilters);
  const dispatch = useDispatch();

  //   function toCurrency(number) {
  //     const formatter = Intl.NumberFormat("es-MX", {
  //       style: "currency",
  //       currency: "MXN",
  //     });
  //     return formatter.format(number);
  //   }
  function changeOrder(event) {
    dispatch(changeProductFiltersOrder(event.target.value));
  }
  function changePriceFrom(event) {
    dispatch(changeProductFiltersPriceFrom(event.target.value));
  }
  function changePriceTo(event) {
    dispatch(changeProductFiltersPriceTo(event.target.value));
  }
  function changeRating(event) {
    dispatch(changeProductFiltersRatedWith(event.target.value));
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
            onChange={(e) => changeOrder(e)}
          >
            <option value="Cheaper">{titles.orderByCheaper}</option>
            <option value="MostExpensive">{titles.orderByMostExpensive}</option>
            <option value="BestRated">{titles.orderByBestRated}</option>
            <option value="MostImportant">{titles.orderByMostImportant}</option>
          </select>
        </div>
        {/* PRICE */}
        <div className={styles.PriceContainer}>
          <div className={styles.FilterTitle}>{titles.priceRange}</div>

          <input
            className={styles.AmounthInput}
            placeholder={titles.minPrice}
            onChange={changePriceFrom}
            value={filters.priceFrom}
            type="number"
          />
          <input
            className={styles.AmounthInput}
            placeholder={titles.maxPrice}
            onChange={changePriceTo}
            type="number"
          />
        </div>
        {/* RATING */}
        <div className={styles.RatingContainer}>
          <div className={styles.FilterTitle}>{titles.ratedWith}</div>
          <select
            value={filters.ratedWith}
            className={styles.SelectInput}
            onChange={changeRating}
          >
            <option value="ratedTen">{titles.ratedTen}</option>
            <option value="ratedNine">{titles.ratedNine}</option>
            <option value="ratedEight">{titles.ratedEight}</option>
            <option value="ratedSeven">{titles.ratedSeven}</option>
            <option value="ratedSix">{titles.ratedSix}</option>
            <option value="everyRating">{titles.everyRating}</option>
          </select>
        </div>
      </div>
    );
  else return "";
}
