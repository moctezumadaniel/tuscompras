import { useDispatch, useSelector } from 'react-redux'
import { setMainMenuToClose, setMainMenuToOpen } from '../../redux/actions/mainMenu'
import styles from './Navbar.module.css'
const titles = {
    sell:'Vender mi producto',
    login: 'Iniciar sesion'
}

export default function Navbar (){
    return(
        <div className={styles.NavbarContainer}>          
            <MenuButton/>

            <a className={styles.Logo} href="/">
                TusCompras
            </a>
           
            <input type='search' 
            className={styles.SearchBar}
            placeholder="Buscar"/>
            
       
            <a className={styles.SellProductButton} href="vender">
            {titles.sell}
            </a>
            

            <a className={styles.LogInAndOut}>
                {titles.login}
            </a>
        </div>
    )
}

function MenuButton(){
    const menuStatus = useSelector(state => state.MainMenu.status)
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
    if(menuStatus === 'opened'){
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