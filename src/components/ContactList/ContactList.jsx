import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import {selectFilteredContacts } from '../../redux/selectors';



const ContactList = () => {
  
    const filteredContacts = useSelector(selectFilteredContacts);
   
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