import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx"; 

const ContactList = ({ contacts, onDelete}) => {
    return (
        <ul className={css.contactsUl}>
            {contacts.map(contact => { 
                return <li key={contact.id} className={css.contactsLi}>
                    <Contact contact={contact} onDelete={ onDelete } />
                </li>
            })}
        </ul>
    )
 }

export default ContactList;