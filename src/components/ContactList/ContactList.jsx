import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { selectNameFilter, selectContacts } from '../../redux/selectors';

const searchContacts = (contacts, filterValue) => {
    return contacts.filter((contact) =>{
       return contact.name.toLowerCase().includes(filterValue.toLowerCase())}
    )
    
    
}

const ContactList = () => {
  
    const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectNameFilter);
    const filteredContacts = searchContacts(contacts, filterValue);

    return (
        <ul className={css.contactsList}>
            
            {filteredContacts.map((contact) => 
                    <li className={css.contactsItem} key={ nanoid()}>
                    <Contact name={contact.name} number={contact.number} id={contact.id}/>
                </li>
                )}

        </ul>
    )
}
export default ContactList;