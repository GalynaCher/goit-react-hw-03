import css from "./ContactForm.module.css";

import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
// import { number } from "yup";

const ContactForm = ({ onAddContact }) => {

    const handleSubmit = (values, actions) => { 
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
        }

        onAddContact(newContact);
        console.log(newContact);
        actions.resetForm();
}

    return (
        <Formik initialValues={{name:"", number:""}} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label >Name</label>
                <Field
                    className={css.formField}
                    type="text"
                    name="name"
                    placeholder="Enter your username"
                />
                <label >Number</label>
                <Field
                    className={css.formField}
                    type="tel"
                    name="number"
                    placeholder="Enter your phone number"
                />
                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
 };

export default ContactForm;