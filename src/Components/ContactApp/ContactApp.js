import { useEffect, useState } from "react";
import AddContact from "../AddContact/AddContact";
import getAllContacts from "../../services/getAllContactsService";
import { Link } from "react-router-dom";
import styles from "./contactApp.module.css";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    async function getContacts() {
      try {
        const res = await getAllContacts();
        setContacts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const AddNewContactFun = (input) => {
    const newTodo = {
      name: input.name,
      email: input.email,
      phone: input.phone,
      address: input.address,
      image: input.image,
    };
    setContacts([...contacts, newTodo]);
  };

  return (
    <div style={{ margin: "100px" }}>
      <Link to="/contacts">
        <button className={styles.button}>Go To contacts</button>
      </Link>
      <AddContact
        AddNewContactFun={AddNewContactFun}
        contact={contact}
        setContact={setContact}
      />
    </div>
  );
};

export default ContactApp;
