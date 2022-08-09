import Contact from "../Contact/Contact";
import styles from "./contactlist.module.css";

const ContactList = () => {
  const contacts = [
    { name: "iman" },
     { name: "kasra" }
    ];

  return (
    <div>
      {contacts.map((contact,index) => (
        <Contact name={contact.name} key={index} />
      ))}
    </div>
  );
};

export default ContactList;
