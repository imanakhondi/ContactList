import { useState } from "react";
import styles from "./addContact.module.css";
import addNewContact from "../../services/addNewContactsService";
import { useNavigate } from "react-router-dom";

const AddContact = ({ AddNewContactFun,contact,setContact }) => {
const navigate=useNavigate()

  // const [contact, setContact] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  // });

  const submitHandler = (e) => {
    if (!contact.name ) {
      alert("enter all fields");
      return;
    }
    e.preventDefault();
    AddNewContactFun(contact);
    addNewContact(contact).catch(error=>console.log(error));
    setContact({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    navigate("/contacts")
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        {/* <div>
          <br />
          <input
            type="file"
            id="avatar"
            value={contact.name}
            name="avatar"
            onChange={changeHandler}
            accept="jpeg"
          />
          <BiUser/>
        </div> */}
        <div>
          {/* <label htmlFor="name"></label> */}
          <br />
          <input
            type="text"
            id="name"
            value={contact.name}
            name="name"
            onChange={changeHandler}
            placeholder="name"
          />
        </div>
        <div>
          {/* <label htmlFor="email">email</label> */}
          <br />
          <input
            type="email"
            id="email"
            value={contact.email}
            name="email"
            onChange={changeHandler}
            placeholder="email"
          />
        </div>
        <div>
          {/* <label htmlFor="email">email</label> */}
          <br />
          <input
            type="tel"
            id="phone"
            value={contact.phone}
            name="phone"
            onChange={changeHandler}
            placeholder="phone"
          />
        </div>
        <div>
          <br />
          <textarea
            id="address"
            value={contact.address}
            name="address"
            onChange={changeHandler}
            placeholder="address"
            className={styles.address}
          />
        </div>
        <div className={styles.submit}>
          <input type="submit" value="add"></input>
        </div>
      </form>
    </div>
  );
};
// adrress
export default AddContact;
