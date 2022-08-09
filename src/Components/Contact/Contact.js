import styles from "./contact.module.css"

const Contact = (props) => {
    return ( 
        <div className={styles.container}>
                <p>{props.name}</p>
                <p>delete</p>
            </div>
     );
}
 
export default Contact;