import { useDispatch, useSelector } from "react-redux"
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
    purchasesList:'LIsta de compras',
    returns:'Mis devoluciones',
    sellersMessages:'Mensajes con vendedores',

    profile:'Perfil',
    profileName:'Nombre',
    addresses:'Direcciones',
    security:'Contraseña y seguridad'


}

export default function MainMenu (){
    const isMainMenuOpen = useSelector(state => state.MainMenu.open)
    const dispatch = useDispatch()
    const body = document.getElementById('body')
    const closeMainMenu = () =>{
        dispatch(setMainMenuToClose())
        body.style.overflow = 'visible'
    }
    if(isMainMenuOpen)
    return(
        <div className={styles.menuContainer}>
           <ul className={styles.menuCanvas}>
               <button className={styles.SellProductButton}>
                   {titles.sell}
                </button>

               <h3>{titles.sales}</h3>
               <li>
                  <a>{titles.products}</a>
                </li>
               <li>{titles.salesList}</li>
               <li>{titles.buyersReturns}</li>
               <li>{titles.buyersMessages}</li>

               <h3>{titles.purchases}</h3>
               <li>{titles.purchasesList}</li>
               <li>{titles.returns}</li>
               <li>{titles.sellersMessages}</li>

               <h3>{titles.profile}</h3>
               <li>{titles.profileName}</li>
               <li>{titles.addresses}</li>
               <li>{titles.security}</li>
           </ul>
           <div className={styles.menuBackground}
           onClick={()=>closeMainMenu()}>

           </div>
        </div>
    )
    else return (
        ""
    )
}