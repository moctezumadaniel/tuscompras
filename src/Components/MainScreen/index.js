import styles from './MainScreen.module.css'
import ListOfProducts from "../ListOfProducts"
import MainMenu from "../MainMenu"
import Navbar from "../Navbar"
import { Switch , BrowserRouter as Router, Route} from 'react-router-dom'
import UserProducts from '../UserProducts'

export default function MainScreen (){
    return(
        <Router>
        <div className={styles.MainScreenContainer}>
            <Navbar/>
            <MainMenu/>

            
                <Switch>

                    <Route path="/">
                        <ListOfProducts/>
                    </Route>
                    
                    <Route path="/products">
                        <UserProducts/>
                    </Route>
                    
                </Switch>
            
            

            
        </div>
        </Router>
    )
}