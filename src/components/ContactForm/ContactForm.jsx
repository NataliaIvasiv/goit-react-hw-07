import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch} from "react-redux";

import * as Yup from 'yup';
import css from './ContactForm.module.css'
import { addContact } from "../../redux/contactsSlice";



const FeedbackSchema = Yup.object({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};



const ContactForm = () => {
  const dispatch = useDispatch();
  
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = ({name, number}, {resetForm}) => {
    const nameTrim = name.trim();
    dispatch(addContact(nameTrim, number))
    resetForm();
  }
  

    return (
            <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
       
    >
      <Form>
        <div className={css.formItem}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.formField} type="text" name="name" id={nameFieldId} placeholder='name' />
          <ErrorMessage name='name' component='p' className={css.errorMessage} />
          </div>

        <div className={css.formItem}>
          <label htmlFor={telFieldId}>Number</label>
            <Field className={css.formField} type="tel" name="number" id={telFieldId} placeholder='number' />
          <ErrorMessage name='number' component='p' className={css.errorMessage} />
            
        </div>
        <button className={css.addButton} type="submit">Add contact</button>
      </Form>
    </Formik>
    )
}
export default ContactForm;