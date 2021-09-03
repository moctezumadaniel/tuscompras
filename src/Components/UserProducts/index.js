import ProductFilters from '../ProductFilters'
import ProductPreview from '../ProductPreview'
import styles from './UserProducts.module.css'

function UserProducts(){
    return(
        <>
        <ProductFilters/>
        <div className={styles.ProductsContainer}>
            
            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>

            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>

            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>

            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>
        </div>
        </>
    )
}
export default UserProducts