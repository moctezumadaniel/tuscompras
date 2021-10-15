import { useEffect } from "react";
import SellerChat from "../SellerChat";
import SellersListOfChats from "../SellersListOfChats";
import styles from "./SellersMessages.module.css";
function SellersMessages() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });
  return (
    <div className={styles.SellersMessages}>
      <SellersListOfChats />
      <SellerChat />
    </div>
  );
}
export default SellersMessages;
