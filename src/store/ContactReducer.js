import { v4 as uuid } from 'uuid';

const initialState = {
     contacts: [],
};

const contactReducer = (state = initialState, action) => {
     switch (action.type) {
          case "ADD_CONTACT":
               const newContact = {
                    id: uuid(),
                    name: action.payload.name,
                    contact: action.payload.contact,
                    group: action.payload.group

               };
               return { ...state, contacts: [...state.contacts, newContact] };

          case "DELETE_CONTACT":
               const filteredContacts = state.contacts.filter(contact => contact.id !== action.payload);
               return { ...state, contact: filteredContacts };

          case "EDIT_CONTACT":
               const editedContact = state.contact.map(contact => {
                    if (contact.id === action.contact.id) {
                         return { ...contact, ...action.edited_list }
                    } else {
                         return contact;
                    }
               });
               return { ...state, contact: editedContact }
          case "SET_ALL_CONTACTS":
               return { contacts: action.payload }
          default:
               return state;
     }
}

export default contactReducer; 