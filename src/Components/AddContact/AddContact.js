import { useState } from "react";
import styles from "./addContact.module.css";

const AddContact = ({ AddNewContact }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const submitHandler = (e) => {
    if (!contact) {
      alert("enter contact");
      return;
    }
    e.preventDefault();
    console.log("imannnnnnnnnnnn");
    AddNewContact(contact);
    setContact({
      name: "",
      email: "",
    });
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">name</label>
          <br />
          <input
            type="text"
            id="name"
            value={contact.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <br />
          <input
            type="email"
            id="email"
            value={contact.email}
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.submit}>
          <input type="submit" value="add"></input>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
