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
                    <Link className={styles.link} to="/products"
                    onClick={()=>closeMainMenu()}>
                      {titles.products}
                    </Link>
                </li>
               <li>
                    <Link className={styles.link} to="/sales"
                    onClick={()=>closeMainMenu()}>
                        {titles.salesList}
                    </Link>
                </li>
               <li>
                    <Link className={styles.link} to="/customersReturns"
                    onClick={()=>closeMainMenu()}>
                        {titles.buyersReturns}
                    </Link>
                </li>
               <li>
                    <Link className={styles.link} to="/customersMessages"
                    onClick={()=>closeMainMenu()}>
                        {titles.buyersMessages}
                    </Link>
                </li>

                <li>
                    <h3>{titles.purchases}</h3>
                </li>
               
               <li>
                   <Link className={styles.link} to="/purchases"
                   onClick={()=>closeMainMenu()}>
                       {titles.purchasesList}
                    </Link>
                </li>
               <li>
                   <Link className={styles.link} to="/returns"
                   onClick={()=>closeMainMenu()}>
                       {titles.returns}
                    </Link>
                </li>
               <li>
                   <Link className={styles.link} to="/sellersMessages"
                   onClick={()=>closeMainMenu()}>
                       {titles.sellersMessages}
                    </Link>
                </li>
                <li>
                    <h3>{titles.profile}</h3>
                </li>
               
               <li>
                   <Link className={styles.link} to="/profile"
                   onClick={()=>closeMainMenu()}>
                       {titles.profileName}
                    </Link>
                </li>
               <li>
                   <Link className={styles.link} to="/addresses"
                   onClick={()=>closeMainMenu()}>
                       {titles.addresses}
                    </Link>
                </li>
               <li>
                   <Link className={styles.link} to="/security"
                   onClick={()=>closeMainMenu()}>
                       {titles.security}
                    </Link>
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