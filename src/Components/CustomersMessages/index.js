import { useEffect } from "react";
import CustomerChat from "../CustomerChat";
import CustomersListOfChats from "../CustomersListOfChats";
import styles from "./CustomersMessages.module.css";
function CustomersMessages() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });
  return (
    <div className={styles.CustomersMessages}>
      <CustomersListOfChats />
      <CustomerChat />
    </div>
  );
}
export default CustomersMessages;
