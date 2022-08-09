import { useState } from "react";
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  const AddNewContact = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      name: input.name,
      email:input.email,
    };
    setContacts([...contacts, newTodo]);
  };


  return (
    <div>
      welcome to contact app
      <AddContact AddNewContact={AddNewContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
