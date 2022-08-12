import { useEffect, useState } from "react";
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";
import deleteContact from "../../services/deleteContactService";
import Contact from "../Contact/Contact";
import getAllContacts from "../../services/getAllContactsService"
import { Link } from "react-router-dom";
import styles from "./contactApp.module.css"

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });


  useEffect(()=>{
    async function getContacts() {
      try {
        const res= await getAllContacts()
        setContacts(res.data);
      } catch (error) {
        console.log(error);
        // setError(true);
      }
    }
    getContacts();
  },[])

  useEffect(() => {
    localStorage.setItem("contacts",JSON.stringify(contacts))
  }, [contacts]);

  const AddNewContactFun = (input) => {
    const newTodo = {
      // id: Math.floor(Math.random() * 1000),
      name: input.name,
      email: input.email,
      phone: input.phone,
      address: input.address,
    };
    setContacts([...contacts, newTodo]);
  };
  // const deleteContactfun = (id) => {
  //   console.log("iman");
  //   console.log(id);
  //   const filteredContacts = contacts.filter((contact) => contact.id !== id);
  //   setContacts(filteredContacts);
  //   deleteContact(id).catch(error=>console.log(error));
  // };

  return (
    <div style={{margin: "100px"}}>
      <Link to="/contacts">
        <button className={styles.button}>Go To contacts</button>
      </Link>
      <AddContact
        AddNewContactFun={AddNewContactFun}
        contact={contact}
        setContact={setContact}
      />
      {/* <ContactList
        contacts={contacts}
        onDelete={ deleteContactfun}
      /> */}
       {/* <div style={{ margin:"100px"}}>
      {contacts.map((contact,index) => (
        <Contact contact={contact} onDelete={()=>deleteContactfun(contact.id)} key={index} />
      ))}
    </div> */}
    </div>
  );
};

export default ContactApp;
