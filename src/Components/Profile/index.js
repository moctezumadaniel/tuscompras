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
    return (
        <div className={styles.ProfileContainer}>
            <div>
                <div className={styles.Titles}>{titles.name}</div>
                <div className={styles.NameInputsContainer}>
                    <input type="text" 
                    className={styles.ShortInput}
                    placeholder={titles.namePlaceholder}/>
                    <input type="password"
                    className={styles.ShortInput}
                    placeholder={titles.passwordPlaceholder}/>
                    <button className={styles.NameButton}>
                        {titles.changeName}
                    </button>
                </div>
            </div>

            <div>
                <div className={styles.Titles}>{titles.email}</div>
                <div>
                    <input type="email"
                    className={styles.ShortInput}
                    placeholder={titles.emailPlaceholder}/>
                    
                    <input type="password"
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