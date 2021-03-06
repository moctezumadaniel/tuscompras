import { useDispatch, useSelector } from "react-redux";
import { showSellersListOfChats } from "../../redux/actions/sellerChats";
import styles from "./SellerChat.module.css";
const titles = {
  send: "Enviar",
};
function SellerChat({ name }) {
  const sellerChat = useSelector((state) => state.SellerChats);
  const dispatch = useDispatch();
  function closeChat() {
    dispatch(showSellersListOfChats());
  }
  return (
    <div className={sellerChat.listOfChats ? styles.Chat : styles.ChatActive}>
      <div className={styles.ChatHeader}>
        <button className={styles.BackButton} onClick={() => closeChat()}>
          <i class="bi bi-arrow-left-short" style={{ fontSize: "40px" }}></i>
        </button>
        <img width="50px" height="50px" alt="" />
        <div className={styles.ChatName}>{"Juan Daniel Trejo Moctezuma"}</div>
      </div>

      <div className={styles.ListOfMessages}>
        <Message
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <UserMessage
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <UserMessage
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <Message
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <UserMessage
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <UserMessage
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <Message
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <UserMessage
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <UserMessage
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <Message
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <UserMessage
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />

        <UserMessage
          message={
            "asjaijsijaijsisaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaao"
          }
        />
      </div>
      <WriteMessage />
    </div>
  );
}
export default SellerChat;

function Message({ message }) {
  return (
    <div className={styles.MessageContainer}>
      <div className={styles.Message}>{message}</div>
    </div>
  );
}
function UserMessage({ message }) {
  return (
    <div className={styles.MessageContainer}>
      <div className={styles.UserMessage}>{message}</div>
    </div>
  );
}

function WriteMessage() {
  return (
    <div className={styles.WriteMessage}>
      <input type="text" className={styles.MessageInput} />
      <button className={styles.SendMessage}>{titles.send}</button>
    </div>
  );
}
