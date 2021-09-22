import styles from './MainScreen.module.css'
import ListOfProducts from "../ListOfProducts"
import MainMenu from "../MainMenu"
import Navbar from "../Navbar"
import { Switch , BrowserRouter as Router, Route} from 'react-router-dom'
import UserProducts from '../UserProducts'
import CustomersReturns from '../CustomersReturns'
import CustomersMessages from '../CustomersMessages'
import Purchases from '../Purchases'
import Returns from '../Returns'
import SellersMessages from '../SellersMessages'
import Profile from '../Profile'
import Security from '../Security'
import ProductSettings from '../ProductSettings'
import Sales from '../Sales'

export default function MainScreen (){
    return(
        <Router>
        <div className={styles.MainScreenContainer} id='Main'>
            <Navbar/>
            <MainMenu/>
            
                 <Switch>

                    
                    
                    <Route path="/productos">
                        <UserProducts/>
                    </Route>
                        
                    <Route path="/devoluciones-de-clientes">
                        <CustomersReturns/>
                    </Route>
                        
                    <Route path="/mensajes-de-clientes">
                        <CustomersMessages/>
                    </Route>

                    <Route path="/compras">
                        <Purchases/>
                    </Route>

                    <Route path="/devoluciones">
                        <Returns/>
                    </Route>

                    <Route path="/mensajes-de-vendedores">
                        <SellersMessages/>
                    </Route>

                    <Route path="/perfil">
                        <Profile/>
                    </Route>

                    <Route path="/seguridad">
                        <Security/>
                    </Route>
                    
                    <Route path="/ventas">
                        <Sales/>
                    </Route>

                    <Route path="/vender">
                        <ProductSettings/>
                    </Route>

                    <Route path="/">
                        <ListOfProducts/>
                    </Route>
                    
                </Switch>
            
            

            
        </div>
        </Router>
    )
}