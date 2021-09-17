import SellerChat from '../SellerChat'
import SellersListOfChats from '../SellersListOfChats'
import styles from './SellersMessages.module.css'
function SellersMessages (){
    return (
        <div className={styles.SellersMessages}>
            <SellersListOfChats/>
            <SellerChat/>
        </div>
    )
}
export default SellersMessages