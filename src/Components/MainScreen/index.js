import styles from './MainScreen.module.css'
import ListOfProducts from "../ListOfProducts"
import MainMenu from "../MainMenu"
import Navbar from "../Navbar"

export default function MainScreen (){
    return(
        <div className={styles.MainScreenContainer}>
            <Navbar/>
            <MainMenu/>
            <ListOfProducts/>

            
        </div>
    )
}