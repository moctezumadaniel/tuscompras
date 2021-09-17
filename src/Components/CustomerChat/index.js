import { useDispatch, useSelector } from "react-redux"
import { showCustomersListOfChats } from "../../redux/actions/customerChats"
import styles from "./CustomerChat.module.css"
const titles = {
    send:'Enviar',
}
function CustomerChat({name}){
    const customerChats = useSelector(state => state.CustomerChats)
    const dispatch = useDispatch()
    function closeChat(){
        dispatch(showCustomersListOfChats())
    }
    
    return(
        <div className={customerChats.listOfChats ? styles.CustomerChat:styles.CustomerChatActive}>
            <div className={styles.ChatHeader}>
                <button className={styles.BackButton}
                onClick={()=>closeChat()}>
                <i class="bi bi-arrow-left-short" style={{fontSize:"40px"}}></i>
                </button>
                <img width="50px" height="50px"/>
                <div className={styles.ChatName}>
                    {"Juan Daniel Trejo Moctezuma"}
                </div>
            </div>

            <div className={styles.ListOfMessages}>
            <Message
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

            <UserMessage
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

            <UserMessage
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

<Message
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

            <UserMessage
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

            <UserMessage
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

<Message
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

            <UserMessage
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

            <UserMessage
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

<Message
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

            <UserMessage
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>

            <UserMessage
            message={"asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"}/>
            
            
            </div>
            <WriteMessage/>
        </div>
    )
}
export default CustomerChat

function Message({message}){
    return(
        <div className={styles.MessageContainer}> 
            <div className={styles.Message}>
                {message}
            </div>
        </div>
    )
}
function UserMessage({message}){
    return(
        <div className={styles.MessageContainer}> 
            <div className={styles.UserMessage}>
                {message}
            </div>
        </div>
    )
}

function WriteMessage(){
    return(
        <div className={styles.WriteMessage}>
            <input type="text"
            className={styles.MessageInput}/>
            <button className={styles.SendMessage}>
            {titles.send}
            </button>
        </div>
    )
}