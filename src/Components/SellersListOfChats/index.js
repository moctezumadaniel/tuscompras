import styles from './SellersListOfChats.module.css'
const titles = {
    chatSearch:'Buscar nombre del vendedor'
}
function SellersListOfChats(){

    return(
        <div className={styles.MainContainer}>
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
    return(
        <div>
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