import css from './Contact.module.css'
import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
const Contact = ({ name, number, id}) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id))
    return (
        <div className={css.ContactContainer}>
            
            <div><p className={css.contactName}><TiUser />{name}</p>
                <p className={css.contactName}><TiPhone/>{ number}</p>
            </div>
            <button className={css.contactDeleteBtn} onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}
export default Contact;