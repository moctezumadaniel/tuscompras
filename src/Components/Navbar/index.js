import { useDispatch, useSelector } from 'react-redux'
import { setMainMenuToClose, setMainMenuToOpen } from '../../redux/actions/mainMenu'
import styles from './Navbar.module.css'

export default function Navbar (){
    return(
        <div className={styles.NavbarContainer}>          
            <MenuButton/>

            <a className={styles.Logo}>
                TusCompras
            </a>
           
            <input type='search' 
            className={styles.SearchBar}
            placeholder="Buscar"/>
            
            <button className={styles.SellProductButton}>
                Vender mi producto
            </button>

            <button className={styles.LogInAndOut}>
                Iniciar sesion
            </button>
        </div>
    )
}

function MenuButton(){
    const isMainMenuOpen = useSelector(state => state.MainMenu.open)
    const body = document.getElementById('body')
    const dispatch = useDispatch()
    const openMainMenu = () =>{
        dispatch(setMainMenuToOpen())
        body.style.overflow = 'hidden'
    }
    const closeMainMenu = () =>{
        dispatch(setMainMenuToClose())
        body.style.overflow = 'visible'
    }
    if(isMainMenuOpen){
        return(
        <button className={styles.MainMenuButton}
        onClick={()=>closeMainMenu()}>
            <i class="bi bi-x" 
            style={{fontSize: '40px'}}>
            </i>
        </button>
        )
    }else return(
        <button className={styles.MainMenuButton}
        onClick={()=>openMainMenu()}>
            <i class="bi bi-list MainMenuIcon" 
            style={{fontSize: '40px'}}>
            </i>
        </button>
    )
}