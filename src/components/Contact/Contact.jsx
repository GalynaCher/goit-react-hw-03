import css from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact }) => { 
    return (
        <div className={css.contactDiv}>
            <div className={css.contactDivP}>
                <p>
                    <RiContactsFill style={{ marginRight: '8px' }} />
                    {contact.name}</p> 
                <p>
                    <FaPhoneAlt style={{marginRight: '8px'}} />
                    {contact.number}
                </p>
            </div>
            <button>Delete</button>
        </div>
    )
}

export default Contact;