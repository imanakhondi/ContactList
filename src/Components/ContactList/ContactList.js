import Contact from "../Contact/Contact";
import styles from "./contactlist.module.css";
import { useEffect, useState } from "react";
import getAllContacts from "../../services/getAllContactsService";
import deleteContact from "../../services/deleteContactService"
import {Link} from "react-router-dom"

const ContactList = ({onDelete}) => {
  const [contacts, setContacts]=useState(null)
  const [error, setError] = useState(false);

  // const contacts = [
  //   { name: "iman" },
  //    { name: "kasra" }
  //   ];
  const mystyle = {
       margin: "100px",
       width: "30rem",
  };

  useEffect(()=>{
    async function getContacts() {
      try {
        const res= await getAllContacts()
        setContacts(res.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    getContacts();
  },[])
  const deleteContactfun = (id) => {
    console.log("iman");
    console.log(id);
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
    deleteContact(id).catch(error=>console.log(error));
  };

  const renderContacts=()=>{

    let renderValue=<p style={{color:"#fff",fontWeight:"bold",fontSize:"20px"}}>There is no contacts.....</p>
    if (error) {
      renderValue = <p style={{color:"#fff",fontWeight:"bold",fontSize:"20px"}}> fetching data failed!!!</p>;
      // toast.error("there is a problem");
    }
  
    if(contacts && !error){
console.log("kasraaaaaaaaaa");
     renderValue= contacts.map((contact,index) => (
        <Contact contact={contact} onDelete={()=>deleteContactfun(contact.id)} key={index} />
      ))
    }
    return renderValue;
    
  }

  return (
    <div style={mystyle} >
      <Link to="/">
        <button className={styles.button} >Go To Home Page</button>
      </Link>
      {renderContacts()}
    </div>
  );
};

export default ContactList;
