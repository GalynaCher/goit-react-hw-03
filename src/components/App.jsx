
import contactsData  from "./ContactList/contacts.json";
import ContactList from "./ContactList/ContactList";

import SearchBox from "./SearchBox/SearchBox.jsx";
import { useState } from "react";

import ContactForm from "./ContactForm/ContactForm.jsx";

function App() {
  const [contacts, setContacts] = useState(contactsData );
  const [searchValue, setSearchValue] = useState("");

  const searchContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase())
  })

const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
   
  return (
    <>
      <div style={{padding: 20}}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox value={searchValue} onSearch={setSearchValue} />
        <ContactList contacts={ searchContacts } />
      </div>
    </>
  )
}

export default App
