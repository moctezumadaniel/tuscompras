import CustomerChat from '../CustomerChat'
import CustomersListOfChats from '../CustomersListOfChats'
import styles from './CustomersMessages.module.css'
function CustomersMessages (){
    const main = document.getElementById('Main')
    function hidOverflow(){
        main.style.overflow = "hidden"
    }
    hidOverflow()
    return (
        <div className={styles.CustomersMessages}>
            <CustomersListOfChats/>
            <CustomerChat/>
        </div>
    )
}
export default CustomersMessages