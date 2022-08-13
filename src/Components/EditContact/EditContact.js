import { useEffect, useState } from "react";
import styles from "./editContact.module.css";
import { useNavigate, useParams } from "react-router-dom";
import getOneContact from "../../services/getOneContactsService";
import updateContact from "../../services/updateContactsService";

const EditContact = ({}) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  const selectId = params.id;

  useEffect(() => {
    if (selectId) {
      getOneContact(selectId)
        .then((res) => setContact(res.data))
        .catch();
    }
  }, []);

  const editContactFun = async (contact, id) => {
    const res = await updateContact(id, contact);
    console.log(res.data);
  };

  const submitHandler = (e) => {
    if (!contact.name) {
      alert("enter all fields");
      return;
    }
    e.preventDefault();
    editContactFun(contact, selectId);

    setContact({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    navigate("/contacts");
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
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
          <input type="submit" value="update"></input>
        </div>
      </form>
    </div>
  );
};
// adrress
export default EditContact;
