import { useState } from 'react'
import styles from './Security.module.css'
const titles = {
    password:'Contraseña',
    previousPassword:'Escribe tu contraseña anterior',
    newPassword:'Escribe tu nueva contraseña',
    confirmNewPassword:'Confirmar nueva contraseña',
    changePassword:'Cambiar contraseña'
}
function Security (){
    const [security, setSecurity] = useState({
        previousPassword:'',
        newPassword:'',
        confirmNewPassword:''
    })
    function setSecurityState (event){
        setSecurity({
            ...security,
            [event.target.name]:event.target.value
        })
    }
    return (
        <div>
            <div className={styles.Titles}>
                {titles.password}
            </div>
            <div className={styles.InputsContainer}>

                <input 
                name="previousPassword"
                onChange={(event)=>setSecurityState(event)}
                value={security.previousPassword}
                placeholder={titles.previousPassword}
                className={styles.Input}
                type="password"/>

                <input 
                name="newPassword"
                onChange={(event)=>setSecurityState(event)}
                value={security.newPassword}
                placeholder={titles.newPassword}
                className={styles.Input}
                type="password"/>

                <input 
                onChange={(event)=>setSecurityState(event)}
                name="confirmNewPassword"
                value={security.confirmNewPassword}
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