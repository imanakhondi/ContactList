import styles from "./contact.module.css";
import profile from "./profile.jpeg";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete, onEdite }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <img src={profile} alt="Avatar" className={styles.avatar} />
        </div>
        <div>
          <Link to={`/contact/${contact.id}`}>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              {contact.name}
            </p>
            <p style={{ fontSize: "12px" }}>{contact.email}</p>
            <p style={{ fontSize: "12px" }}>{contact.phone}</p>
            <p style={{ fontSize: "12px" }}>{contact.address}</p>
          </Link>
        </div>
      </div>
      <div>
        <button onClick={onDelete} className={`${styles.btn} ${styles.trash}`}>
          <BiTrash />
        </button>
        <Link to={`/edit/${contact.id}`}>
          <button onClick={onEdite} className={`${styles.btn} ${styles.edit}`}>
            <BiEditAlt />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
