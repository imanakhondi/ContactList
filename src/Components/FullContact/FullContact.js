import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./fullContact.module.css";
import profile from "./profile.jpeg";
import getOneContact from "../../services/getOneContactsService";
import { BiTrash } from "react-icons/bi";
import deleteContact from "../../services/deleteContactService";
import { BsFillTelephoneFill,BsGeoAltFill,BsFillEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FullContact = () => {
  const [contact, setContact] = useState();
  const params = useParams();
  const contactId = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (contactId) {
      getOneContact(contactId)
        .then((response) => setContact(response.data))
        .catch();
    }
  }, [contactId]);

  const deleteContactFun = () => {
    deleteContact(contactId).catch();
    setContact(null);
    navigate("/contacts");
  };

  if (contact) {
    return (
      <div style={{ margin: "100px"} }>
        <Link to="/contacts">
        <button className={styles.button}>Go To contacts</button>
      </Link>
      <div className={styles.container}>
        <div className={styles.info}>
          <img src={profile} alt="Avatar" className={styles.avatar} />
        </div>
        <div style={{ textAlign: "center" }}>
          <p
            style={{ fontWeight: "bold", fontSize: "18px", marginTop: "15px" }}
          >
            {contact.name}
          </p>
          <div className={styles.details}>
            <BsFillTelephoneFill />
            <span style={{ fontSize: "10px", marginLeft: "3px" }}>
              {contact.phone}
            </span>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <BsFillEnvelopeFill/>
          <p style={{ fontSize: "12px",fontWeight:"500" }}>{contact.email}</p>
        </div>
        <div className={styles.contactInfo}>
          <BsGeoAltFill/>
          <p style={{ fontSize: "12px",fontWeight:"500" }}>{contact.address}</p>
        </div>
        <button onClick={deleteContactFun} className={styles.trash}>
          <BiTrash />
        </button>
      </div>
      </div>
    );
  }
};

export default FullContact;
