import { useDispatch, useSelector } from 'react-redux'
import { hideCustomersListOfChats } from '../../redux/actions/customerChats'
import styles from './CustomersListOfChats.module.css'
const titles = {
    chatSearch:'Buscar nombre del cliente'
}
function CustomersListOfChats(){
    const customerChats = useSelector(state => state.CustomerChats)
    
    return(
        <div className={customerChats.listOfChats ? styles.MainContainer: styles.MainContainerHided}>
            <input type="search"
            className={styles.ChatSearch}
            placeholder={titles.chatSearch}/>
            <ListOfChats/>

        </div>
    )
  
}
export default CustomersListOfChats

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
        dispatch(hideCustomersListOfChats())
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