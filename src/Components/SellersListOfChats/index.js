import { useDispatch, useSelector } from 'react-redux'
import { hideSellersListOfChats } from '../../redux/actions/sellerChats'
import styles from './SellersListOfChats.module.css'
const titles = {
    chatSearch:'Buscar nombre del vendedor'
}
function SellersListOfChats(){
    const sellerChats = useSelector(state => state.SellerChats)
    return(
        <div className={sellerChats.listOfChats ?  styles.MainContainer : styles.MainContainerHided}>
            <input type="search"
            className={styles.ChatSearch}
            placeholder={titles.chatSearch}/>
            <ListOfChats/>

        </div>
    )
}
export default SellersListOfChats

function ListOfChats(){
    return(
        <div className={styles.ListOfChats}>
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            <ChatPreview
            name={"Juan Daniel Trejo Moctezuma"}
            lastMessage={"Quiero hacer una pregunta sobre"}
            />
            
        </div>
    )
}

function ChatPreview({name, lastMessage}){
    const dispatch = useDispatch()
    function selectChat(){
        if(window.innerWidth < 750)
        dispatch(hideSellersListOfChats())
    }
    return(
        <div onClick={()=>selectChat()}>
            <div className={styles.ChatPreview}>
            <img width="50" height="50"/>
                <div className={styles.ChatDescription}>
                    <div className={styles.ChatName}>
                        {name}
                    </div>
                    <div>
                        {lastMessage}
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}