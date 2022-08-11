import styles from "./contact.module.css";
import profile from "./profile.jpeg";
import {BiTrash} from "react-icons/bi"
const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.container} >
      <div className={styles.info}>
        <div>
          <img src={profile} alt="Avatar" className={styles.avatar} />
        </div>
        <div>
          <p style={{fontWeight: "bold",fontSize:"18px"}}>{contact.name}</p>
          <p style={{fontSize:"12px"}}>{contact.email}</p>
          <p style={{fontSize:"12px"}}>{contact.phone}</p>
          <p style={{fontSize:"12px"}}>{contact.address}</p>
        </div>
      </div>
      <button onClick={onDelete} className={styles.trash}><BiTrash/></button>
    </div>
  );
};

export default Contact;
