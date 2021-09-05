import { useDispatch, useSelector } from "react-redux"
import { Link, BrowserRouter as Router } from "react-router-dom"
import { setMainMenuToClose } from "../../redux/actions/mainMenu"
import styles from './MainMenu.module.css'
const titles = {
    sell:'Vender mi producto',

    sales:'Ventas',
    products: 'Mis productos',
    salesList:'Lista de ventas',
    buyersReturns:'Devoluciones de clientes',
    buyersMessages: 'Mensajes de compradores',

    purchases:'Compras',
    purchasesList:'Lista de compras',
    returns:'Mis devoluciones',
    sellersMessages:'Mensajes con vendedores',

    profile:'Perfil',
    profileName:'Nombre',
    addresses:'Direcciones',
    security:'Contraseña y seguridad'


}

export default function MainMenu (){
    const menuStatus = useSelector(state => state.MainMenu.status)
    const dispatch = useDispatch()
    const body = document.getElementById('body')
    const closeMainMenu = () =>{
        dispatch(setMainMenuToClose())
        body.style.overflow = 'visible'
    }
    if(menuStatus !== '')
    return(
        <Router>
        <div className={menuStatus === 'opened'? styles.menuContainer: styles.menuContainerHided}>
           <ul className={menuStatus === 'opened'? styles.menuCanvas: styles.menuCanvasHided}>
               <button className={styles.SellProductButton}>
                   {titles.sell}
                </button>
                <li>
                    <h3>{titles.sales}</h3>
                </li>
               
               <li>
                    <a className={styles.link} href="/products"
                    onClick={()=>closeMainMenu()}>
                      {titles.products}
                    </a>
                </li>
               <li>
                    <a className={styles.link} href="/sales"
                    onClick={()=>closeMainMenu()}>
                        {titles.salesList}
                    </a>
                </li>
               <li>
                    <a className={styles.link} href="/customersReturns"
                    onClick={()=>closeMainMenu()}>
                        {titles.buyersReturns}
                    </a>
                </li>
               <li>
                    <a className={styles.link} href="/customersMessages"
                    onClick={()=>closeMainMenu()}>
                        {titles.buyersMessages}
                    </a>
                </li>

                <li>
                    <h3>{titles.purchases}</h3>
                </li>
               
               <li>
                   <a className={styles.link} href="/purchases"
                   onClick={()=>closeMainMenu()}>
                       {titles.purchasesList}
                    </a>
                </li>
               <li>
                   <a className={styles.link} href="/returns"
                   onClick={()=>closeMainMenu()}>
                       {titles.returns}
                    </a>
                </li>
               <li>
                   <a className={styles.link} href="/sellersMessages"
                   onClick={()=>closeMainMenu()}>
                       {titles.sellersMessages}
                    </a>
                </li>
                <li>
                    <h3>{titles.profile}</h3>
                </li>
               
               <li>
                   <a className={styles.link} href="/profile"
                   onClick={()=>closeMainMenu()}>
                       {titles.profileName}
                    </a>
                </li>
               <li>
                   <a className={styles.link} href="/addresses"
                   onClick={()=>closeMainMenu()}>
                       {titles.addresses}
                    </a>
                </li>
               <li>
                   <a className={styles.link} href="/security"
                   onClick={()=>closeMainMenu()}>
                       {titles.security}
                    </a>
                </li>
           </ul>
           <div className={menuStatus === 'opened' ? styles.menuBackground: styles.menuBackgroundHided}
           onClick={()=>closeMainMenu()}>

           </div>
        </div>
        </Router>
    )
    else return ""
}