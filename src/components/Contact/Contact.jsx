import css from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, onDelete}) => { 
    return (
        <div className={css.contactDiv}>
            <div className={css.contactDivP}>
                <p>
                    <RiContactsFill style={{ marginRight: '8px' }} />
                    <span className={css.contactSpan}>{contact.name}</span>
                </p> 
                <p>
                    <FaPhoneAlt style={{marginRight: '8px'}} />
                    <span className={css.contactSpan}>{contact.number}</span>
                </p>
            </div>
            <button onClick={() => { onDelete(contact.id)}}>Delete</button>
        </div>
    )
}

export default Contact;