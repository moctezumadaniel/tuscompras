import { useState } from 'react'
import styles from './Profile.module.css'
const titles = {
    //NAME
    name:'Nombre',
    namePlaceholder:'Escribe tu nombre completo',
    changeName:'Cambiar nombre',
    //EMAIL
    email:'Correo Electrónico',
    emailPlaceholder:'Escribe tu correo electrónico',
    passwordPlaceholder:'Escribe tu contraseña',
    changeEmail:'Cambiar correo',
    //ADRESSES
    addresses:'Direcciones de entregas',
    addressesPlaceholder:'Escribe una nueva dirección si la necesitas',
    deleteAddress:'Eliminar direccion',
    addAddress:'Agregar dirección',

}
function Profile (){
    const [profile, setProfile] = useState({
        name:'',
        namePassword:'',
        email:'',
        emailPassword:'',
        addresses:[],
        newAddress:''
    })
    function setSecurityState (event){
        setProfile({
            ...profile,
            [event.target.name]:event.target.value
        })
    }
    return (
        <div className={styles.ProfileContainer}>
            <div className={styles.NameContainer}>
                <div className={styles.Titles}>{titles.name}</div>
                <div className={styles.NameInputsContainer}>

                    <input 
                    type="text" 
                    name="name"
                    onChange={(event)=>setSecurityState(event)}
                    className={styles.ShortInput}
                    placeholder={titles.namePlaceholder}/>

                    <input 
                    type="password"
                    name="namePassword"
                    onChange={(event)=>setSecurityState(event)}
                    className={styles.ShortInput}
                    placeholder={titles.passwordPlaceholder}/>

                    <button className={styles.NameButton}>
                        {titles.changeName}
                    </button>
                </div>
            </div>

            <div className={styles.EmailContainer}>
                <div className={styles.Titles}>{titles.email}</div>
                <div className={styles.EmailInputsContainer}>
                    <input 
                    type="email"
                    name="email"
                    onChange={(event)=>setSecurityState(event)}
                    className={styles.ShortInput}
                    placeholder={titles.emailPlaceholder}/>
                    
                    <input 
                    type="password"
                    name="emailPassword"
                    onChange={(event)=>setSecurityState(event)}
                    className={styles.ShortInput}
                    placeholder={titles.passwordPlaceholder}/>
                    
                    <button className={styles.EmailButton}>
                        {titles.changeEmail}
                    </button>
                </div>
            </div>

            <div>
                <div className={styles.Titles}>{titles.addresses}</div>
                <div className={styles.AddressesContainer}>
                    <div className={styles.AddressContainer}>
                        <textarea 
                        className={styles.AddressInput}
                        placeholder={titles.addressesPlaceholder}/>
                        <button className={styles.DeleteAddress}>
                            {titles.deleteAddress}
                        </button>
                    </div>
                    <div className={styles.AddressContainer}>
                        <textarea 
                        name="newAddress"
                        onChange={(event)=>setSecurityState(event)}
                        className={styles.AddressInput}
                        placeholder={titles.addressesPlaceholder}/>
                        <button className={styles.AddAddress}>
                            {titles.addAddress}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile