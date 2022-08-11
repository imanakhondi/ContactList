import AddContact from "./Components/AddContact/AddContact";
import ContactApp from "./Components/ContactApp/ContactApp";
import ContactList from "./Components/ContactList/ContactList";
import NotFound from "./Pages/NotFound";

const routes = [
  { path: "/", element: <ContactApp /> },
  { path: "/contacts", element: <ContactList /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
