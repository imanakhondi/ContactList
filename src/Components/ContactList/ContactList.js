import Contact from "../Contact/Contact";
import styles from "./contactlist.module.css";
import { useEffect, useState } from "react";
import getAllContacts from "../../services/getAllContactsService";
import deleteContact from "../../services/deleteContactService";
import { Link } from "react-router-dom";

const ContactList = ({ onDelete }) => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [error, setError] = useState(false);

  // const mystyle = {
  //   minWidth: "370px",
  // };

  useEffect(() => {
    async function getContacts() {
      try {
        const res = await getAllContacts();
        setContacts(res.data);
        setAllContacts(res.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    getContacts();
  }, []);
  const deleteContactFun = (id, e) => {
    e.stopPropagation();
    console.log("iman");
    console.log(id);
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
    deleteContact(id).catch((error) => console.log(error));
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setContacts(allContacts);
    } else {
      const filteredContacts = allContacts.filter((contact) => {
        console.log(Object.values(contact).join(" "));
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setContacts(filteredContacts);
    }
  };

  const editContactFun = (contact) => {
    console.log("imannnnnnnnnn");
    console.log(contact);
  };

  const renderContacts = () => {
    let renderValue = (
      <p style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
        There is no contacts.....
      </p>
    );
    if (error) {
      renderValue = (
        <p style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
          fetching data failed!!!
        </p>
      );
      // toast.error("there is a problem");
    }

    if (contacts && !error) {
      renderValue = contacts.map((contact, index) => (
        <Contact
          contact={contact}
          onDelete={(e) => deleteContactFun(contact.id, e)}
          onEdite={() => editContactFun(contact)}
          key={index}
        />
      ));
    }
    return renderValue;
  };

  return (
    <div className={styles.contactList}>
      <Link to="/">
        <button className={styles.button}>Add New Contact</button>
      </Link>

      <input type="text" placeholder="search" onChange={changeHandler} />
      <section>{renderContacts()}</section>
    </div>
  );
};

export default ContactList;
