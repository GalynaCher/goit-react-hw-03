
import contactsData  from "./ContactList/contacts.json";
import ContactList from "./ContactList/ContactList";

import SearchBox from "./SearchBox/SearchBox.jsx";
import { useState, useEffect } from "react";

import ContactForm from "./ContactForm/ContactForm.jsx";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactsData;
  });

    useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
     console.log(`useEffect saved-contacts: ${JSON.stringify(contacts)}`);
  }, [contacts]);

  const [searchValue, setSearchValue] = useState("");

  const searchContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase())
  })

const handleAddContact = (newContact) => {
  setContacts([...contacts, newContact]);
};
  
  const handleDeleteContact = (id) => { 
    console.log("id: ", id);
    setContacts(contacts.filter((contact) => contact.id !== id))
  }
   
  return (
    <>
      <div style={{padding: 20}}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox value={searchValue} onSearch={setSearchValue} />
        <ContactList contacts={searchContacts} onDelete={ handleDeleteContact } />
      </div>
    </>
  )
}

export default App
