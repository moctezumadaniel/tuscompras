import { useState } from 'react'
import ProductPreview from '../ProductPreview'
import SalesFilters from '../SalesFilters'
import styles from './Purchases.module.css'
const titles ={
    seeDetails:'Ver detalles',
    closeDetails:'Cerrar detalles',
}
function Purchases (){
    return (
        <div>
            <SalesFilters/>
            <ListOfPurchases/>
        </div>
    )
}
export default Purchases

function ListOfPurchases(){
    return(
    <div className={styles.ListOfPurchases}>
    <Purchase details={{
        customerName:'Juan Daniel Trejo Moctezuma',
        amounth:54000,
        date:'2021-10-21'
        }}/>
    <Purchase details={{
        customerName:'Juan Daniel Trejo Moctezuma',
        amounth:54000,
        date:'2021-10-21'
        }}/>
    </div>
    )
}

function Purchase({details}){
    const [detailsStatus, setDatailsStatus] = useState(false)
    const openDetails = () =>{
        setDatailsStatus(!detailsStatus)
    }
    return(
        <div className={styles.Purchase}>
            <div className={styles.PurchaseHeader}>
                <div className={styles.PurchaseTitle}>
                {`${details.customerName} ${details.amounth} ${details.date}`}
                </div>
                <button className={styles.PurchaseButtonDetails}
                onClick={()=>openDetails()}>
                {!detailsStatus ? titles.seeDetails:titles.closeDetails}
                </button>
            </div>
            {detailsStatus ?
            <div className={styles.PurchaseDetails}>
            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>

            <ProductPreview 
            title="ejemplo largo de la descripcion de un producto"
            price="50000"
            review="10/10"/>
            </div>
            :""}
            
            
        </div>
    )
}