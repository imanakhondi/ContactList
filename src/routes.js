import AddContact from "./Components/AddContact/AddContact";
import ContactApp from "./Components/ContactApp/ContactApp";
import ContactList from "./Components/ContactList/ContactList";
import EditContact from "./Components/EditContact/EditContact";
import FullContact from "./Components/FullContact/FullContact";
import NotFound from "./Pages/NotFound";

const routes = [
  { path: "/", element: <ContactApp /> },
  { path: "/contacts", element: <ContactList /> },
  { path: "/contact/:id", element: <FullContact /> },
  { path: "/edit/:id", element: <EditContact /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
