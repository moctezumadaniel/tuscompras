import ProductPreview from '../ProductPreview'
import ReturnsFilters from '../ReturnsFilters'
import styles from './Returns.module.css'
function Returns (){
    return (
        <div>
            <ReturnsFilters/>
            <ListOfReturns/>
        </div>
    )
}
export default Returns

function ListOfReturns(){
    return(
        <div className={styles.ListOfReturns}>
            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>
            
            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>
            
        </div>
    )
}