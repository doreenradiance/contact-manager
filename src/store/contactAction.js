export const addContact = (contact) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore()
            .collection('contacts')
            .add({...contact, timestamp: getFirestore().FieldValue.serverTimestamp()})
            .then(
                (doc) => {
                }
            );
    };
};

export const deleteContact = (contact_id) => {
    return {
        type: 'DELETE_CONTACT',
        payload: contact_id,
    };
};

export const editContact = (contact_id, editedContact,) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore()
            .collection('contacts')
            .orderBy("name", "asc")
            .doc(contact_id)
            .set(editedContact)
            .then(() => { })
            .catch((err) => { });
    };

};

export const getAllContacts = () => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('contacts').onSnapshot((snapshot) => {
            let contacts = [];
            snapshot.forEach((doc) => {
                contacts.push(doc.data())
            });
            console.log(contacts);
            dispatch({
                type: 'SET_ALL_CONTACTS',
                payload: contacts,
            })
        },
            (err) => { }
        )
    }
}
