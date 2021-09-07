import styles from './Security.module.css'
const titles = {
    password:'Contraseña',
    previousPassword:'Escribe tu contraseña anterior',
    newPassword:'Escribe tu nueva contraseña',
    confirmNewPassword:'Confirmar nueva contraseña',
    changePassword:'Cambiar contraseña'
}
function Security (){
    return (
        <div>
            <div className={styles.Titles}>
                {titles.password}
            </div>
            <div className={styles.InputsContainer}>
                <input 
                placeholder={titles.previousPassword}
                className={styles.Input}
                type="password"/>
                <input 
                placeholder={titles.newPassword}
                className={styles.Input}
                type="password"/>
                <input 
                placeholder={titles.confirmNewPassword}
                className={styles.Input}
                type="password"/>
                <button className={styles.PasswordButton}>
                    {titles.changePassword}
                </button>
            </div>

        </div>
    )
}
export default Security