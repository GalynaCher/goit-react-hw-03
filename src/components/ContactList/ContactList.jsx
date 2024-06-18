import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx"; 

const ContactList = ({ contacts }) => {
    return (
        <ul className={css.contactsUl}>
            {contacts.map(contact => { 
                return <li key={contact.id} className={css.contactsLi}>
                    <Contact contact={ contact } />
                </li>
            })}
        </ul>
    )
 }

export default ContactList;