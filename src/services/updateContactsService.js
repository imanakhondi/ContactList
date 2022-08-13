import http from "./httpService";

const updateContact = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};

// const deleteContact = (id) => {
//     return http.delete(`/contacts/${id}`);
// }

export default updateContact;
