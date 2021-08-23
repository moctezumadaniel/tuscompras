import styles from './Navbar.module.css'
export default function Navbar (){
    return(
        <div className={styles.NavbarContainer}>          
            <button className={styles.MainMenuButton}>
                <i class="bi bi-list MainMenuIcon" 
                style={{fontSize: '40px'}}>
                </i>
            </button>
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
