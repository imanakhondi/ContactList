import http from "./httpService";

const addNewContact = (data) => {
    return http.post("/contacts",data)
}
 
export default addNewContact;