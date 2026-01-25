'use strict'

const contactsManagement = () => {
    const contacts = [];

    const getContacts = () => structuredClone(contacts);

    const addContact = (data) => {
        data.id = crypto.randomUUID();
        contacts.push(data);
    }

    const removeContact = (id) => {
        const index = contacts.findIndex(c => c.id === id);
        if (index === -1) return false;
        return contacts.splice(index, 1)[0];
    }

    return {
        getContacts,
        addContact,
        removeContact
    }
}
const contactService = contactsManagement();

export default contactService;