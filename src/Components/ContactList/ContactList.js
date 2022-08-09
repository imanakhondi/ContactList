import Contact from "../Contact/Contact";
import styles from "./contactlist.module.css";

const ContactList = ({contacts}) => {
  // const contacts = [
  //   { name: "iman" },
  //    { name: "kasra" }
  //   ];

  return (
    <div>
      {contacts.map((contact,index) => (
        <Contact contact={contact} key={index} />
      ))}
    </div>
  );
};

export default ContactList;
