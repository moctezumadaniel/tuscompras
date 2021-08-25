import { useSelector } from "react-redux"

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
    if(isMainMenuOpen)
    return(
        <div>
           <ul>
               <button>{titles.sell}</button>
               <h3>{titles.sales}</h3>
               <a>{titles.products}</a>
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
        </div>
    )
    else return (
        ""
    )
}