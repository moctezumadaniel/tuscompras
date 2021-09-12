import { useDispatch, useSelector } from 'react-redux'
import { toggleReturnsFilters } from '../../redux/actions/returnsFilters'
import styles from './ReturnsFilters.module.css'
const titles ={
    openFilters:'Filtrar Devoluciones',
    applyFilters:'Aplicar y cerrar filtros',
    orderBy:'Ordenar por:',
    totalRange:'Rango de totales:',
    ratedWith:'Calificados como',
    // ORDER BY
    latest:'Más recientes',
    oldest:'Más antiguos',
    greatestTotal:'Mayor total',
    lowestTotal:'Menor total',
    // PRICE
    minTotal:'Desde',
    maxTotal:'Hasta',
    // CUSTOMER NAME
    sellerName:"Del vendedor:",
    sellerNamePlaceholder:"Nombre del vendedor a buscar"
}
function ReturnsFilters (){
    const filters = useSelector(state => state.ReturnsFilters)
    const dispatch = useDispatch()
    console.log(filters)
    const openCloseFilters = () =>{
        dispatch(toggleReturnsFilters())
    }
    return(
        <div className={styles.FiltersContainer}>

            <button className={styles.FilterButton}
            onClick={()=>openCloseFilters()}>
                <i class="bi bi-funnel-fill"
                style={{marginRight:"10px"}}></i>
                {filters.status === 'opened'?
                titles.applyFilters
                :titles.openFilters}
            </button>

            <ListOfFilters filters={filters}/>

        </div>
    )
}
export default ReturnsFilters

function ListOfFilters({filters}){
    if(filters.status === 'opened')
    return(
        <div className={styles.ListOfFilters}>
            {/* ORDER */}
            <div className={styles.OrderContainer}>
                <div className={styles.FilterTitle}>
                    {titles.orderBy}
                </div>
                <select className={styles.SelectInput}>
                    <option>{titles.latest}</option>
                    <option>{titles.oldest}</option>
                    <option>{titles.greatestTotal}</option>
                    <option>{titles.lowestTotal}</option>
                </select>
            </div>
            {/* TOTAL */}
            <div className={styles.PriceContainer}>
                <div className={styles.FilterTitle}>
                    {titles.totalRange}
                </div>
                                       
                        <input className={styles.AmounthInput}
                        placeholder={titles.minTotal}
                        type="number"/>
                        <input className={styles.AmounthInput}
                        placeholder={titles.maxTotal}
                        type="number"/>
               
            </div>
            {/* TOTAL */}
            <div className={styles.PriceContainer}>
                <div className={styles.FilterTitle}>
                    {titles.totalRange}
                </div>
                                       
                        <input className={styles.DatesInput}
                        placeholder={titles.minTotal}
                        type="date"/>
                        <input className={styles.DatesInput}
                        placeholder={titles.maxTotal}
                        type="date"/>
               
            </div>
            {/* RATING */}
            <div className={styles.RatingContainer}>
                <div className={styles.FilterTitle}>
                    {titles.sellerName}
                </div>
                <input type="search"
                className={styles.SearchInput}
                placeholder={titles.sellerNamePlaceholder}/>
            </div>
        </div>
    )
    else return ""
}