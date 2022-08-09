import styles from "./contact.module.css"

const Contact = ({contact}) => {
    return ( 
        <div className={styles.container}>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>delete</p>
            </div>
     );
}
 
export default Contact;