import { useDispatch, useSelector } from 'react-redux'
import { toggleProductFilters } from '../../redux/actions/productFilters'
import styles from './ProductFilters.module.css'
const titles ={
    openFilters:'Filtrar Productos',
    applyFilters:'Aplicar y cerrar filtros',
    orderBy:'Ordenar por:',
    priceRange:'Rango de precios:',
    priceFrom:'Desde:',
    priceTo:'Hasta:',
    ratedWith:'Calificados como',
    // ORDER BY
    orderByCheaper:'Más baratos',
    orderByMostExpensive:'Más caros',
    orderByBestRated:'Mejor calificados',
    orderByMostImportant:'Más importantes',
    // RATED WITH
    ratedTen:'Solo 10/10',
    ratedNine:'9/10 y superiores',
    ratedEight:'8/10 y superiores',
    ratedSeven:'7/10 y superiores',
    ratedSix:'6/10 y superiores',
    everyRating:'Cualquier calificacion'
}
function ProductFilters (){
    const filters = useSelector(state => state.ProductFilters)
    const dispatch = useDispatch()
    console.log(filters)
    const openCloseFilters = () =>{
        dispatch(toggleProductFilters())
    }
    return(
        <div>

            <button className={styles.FilterButton}
            onClick={()=>openCloseFilters()}>
                <i class="bi bi-funnel-fill"
                style={{marginRight:"10px"}}></i>
                {titles.openFilters}
            </button>

            <ListOfProducts filters={filters}/>

        </div>
    )
}
export default ProductFilters

function ListOfProducts({filters}){
    if(filters.status === 'opened')
    return(
        <div className={styles.FiltersContainer}>
            {/* ORDER */}
            <div className={styles.OrderContainer}>
                <div className={styles.FilterTitle}>
                    {titles.orderBy}
                </div>
                <select className={styles.SelectInput}>
                    <option>{titles.orderByCheaper}</option>
                    <option>{titles.orderByMostExpensive}</option>
                    <option>{titles.orderByBestRated}</option>
                    <option>{titles.orderByMostImportant}</option>
                </select>
            </div>
            {/* PRICE */}
            <div className={styles.PriceContainer}>
                <div className={styles.FilterTitle}>
                    {titles.priceRange}
                </div>
                <div className={styles.AmounthInputContainer}>
                    <div className={styles.AmounthContainer}>
                        <div>{titles.priceFrom}</div>
                        <input className={styles.AmounthInput}/>
                    </div>
                    <div className={styles.AmounthContainer}>
                        <div>{titles.priceTo}</div>
                        <input className={styles.AmounthInput}/>
                    </div>
                </div>
            </div>
            {/* RATING */}
            <div className={styles.RatingContainer}>
                <div className={styles.FilterTitle}>
                    {titles.ratedWith}
                </div>
                <select className={styles.SelectInput}>
                    <option>{titles.ratedTen}</option>
                    <option>{titles.ratedNine}</option>
                    <option>{titles.ratedEight}</option>
                    <option>{titles.ratedSeven}</option>
                    <option>{titles.ratedSix}</option>
                    <option>{titles.everyRating}</option>
                </select>
            </div>
        </div>
    )
    else return ""
}