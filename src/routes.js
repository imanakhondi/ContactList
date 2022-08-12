import AddContact from "./Components/AddContact/AddContact";
import ContactApp from "./Components/ContactApp/ContactApp";
import ContactList from "./Components/ContactList/ContactList";
import FullContact from "./Components/FullContact/FullContact";
import NotFound from "./Pages/NotFound";

const routes = [
  { path: "/", element: <ContactApp /> },
  { path: "/contacts", element: <ContactList /> },
  { path: "/contact/:id", element: <FullContact /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
