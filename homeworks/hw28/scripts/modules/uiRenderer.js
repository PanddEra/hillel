'use strict'

const uiContactsListHandler = () => {
    const contactsAlert = document.querySelector('[data-contacts-alert]');
    const contactsList = document.querySelector('[data-contacts-list]');

    const createItemTemplate = ({id, fullName, phone, address}) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        li.dataset.id = id;
        li.innerHTML = `${fullName} | ${phone} | ${address}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn-close', 'me-md-2');
        deleteButton.dataset.id = id;
        li.appendChild(deleteButton);

        return li;
    }


    const addElement = (data) => {
        const element = createItemTemplate(data)
        contactsList.prepend(element)
        contactsList.classList.remove('d-none');
        contactsAlert.classList.add('d-none');
    }

    const removeElement = (id) => {
        const el = contactsList.querySelector(`[data-id="${id}"]`);
        if (el) el.remove();

        if (!contactsList.children.length) {
            contactsAlert.classList.remove('d-none');
            contactsList.classList.add('d-none');
        }
    }

    return {
        addElement,
        removeElement,
    }
}
const listHandler = uiContactsListHandler();

export default listHandler;
