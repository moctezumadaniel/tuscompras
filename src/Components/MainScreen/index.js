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
import Addresses from '../Addresses'
import Security from '../Security'
import ProductSettings from '../ProductSettings'

export default function MainScreen (){
    return(
        <Router>
        <div className={styles.MainScreenContainer}>
            <Navbar/>
            <MainMenu/>
            
                 <Switch>

                    
                    
                    <Route path="/products">
                        <UserProducts/>
                    </Route>
                        
                    <Route path="/customersReturns">
                        <CustomersReturns/>
                    </Route>
                        
                    <Route path="/customersMessages">
                        <CustomersMessages/>
                    </Route>

                    <Route path="/purchases">
                        <Purchases/>
                    </Route>

                    <Route path="/returns">
                        <Returns/>
                    </Route>

                    <Route path="/sellersMessages">
                        <SellersMessages/>
                    </Route>

                    <Route path="/profile">
                        <Profile/>
                    </Route>

                    <Route path="/addresses">
                        <Addresses/>
                    </Route>

                    <Route path="/security">
                        <Security/>
                    </Route>

                    <Route path="/">
                        <ListOfProducts/>
                    </Route>
                    
                </Switch>
            
            

            
        </div>
        </Router>
    )
}