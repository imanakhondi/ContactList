import { useState } from "react";
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";

const ContactApp = () => {
  const [contact, setContact] = useState([]);

  return (
    <div>
      welcome to contact app
      <AddContact />
      <ContactList />
    </div>
  );
};

export default ContactApp;
