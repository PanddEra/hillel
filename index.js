'use strict';

const user = {
    name: 'Vova',
    age: 20,
}

let {name} = user; // Vova
let {age: year} = user; // 20

let contactIdToDelete = null; // when modal is open


// IFFE
// Global Scope
(function () {
    // Just for example
    const validationRegExps = {
        'fullName': /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
        'phone': /^\+[1-9]\d{7,14}$/,
        'address': /^(?=.{5,120}$)[\p{L}\d][\p{L}\d\s.,'’\-\/#]+$/u
    }

    const errorMessages = {
        'fullName': 'Full Name Required',
        'phone': 'Phone Number Required',
        'address': 'Address Required',
    }

    // UI Handling

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

    // General Variables
    const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'))
    const toastDeleted = new bootstrap.Toast(document.querySelector('#contactDeleted'))
    const addContactModalSelector = '#addContactModal';
    const deleteContactModalSelector = '#deleteContactModal';

    const addContactModal = new bootstrap.Modal(addContactModalSelector, {
        keyboard: false,
        backdrop: 'static'
    });
    const deleteContactModal = new bootstrap.Modal(deleteContactModalSelector, {})

    const addModalTrigger = document.querySelector('[data-add-contact-modal-btn]');
    const confirmDeleteBtn = document.querySelector('#deleteContactModal .btn.btn-danger');
    const cancelDeleteBtn = document.querySelector('#deleteContactModal .btn.btn-secondary');
    const deleteModalTitle = document.querySelector('#exampleModalLabel');

    


    // State management
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


    // Events
    addModalTrigger.addEventListener('click', () => {
        addContactModal.show()
    })

    addContactModal._element.querySelector(`form#add-contact-form`)
        .addEventListener('submit', evt => {
            evt.preventDefault();
            let formValidated = true;
            const inputs = evt.target.querySelectorAll('input, textarea');
            const data = Array.from(inputs).reduce((acc, input) => {
                const {name, value, parentElement: wrapper} = input;

                if (validationRegExps[name].test(value)) {
                    acc[name] = value
                } else {
                    const errBlock = document.createElement('div');
                    errBlock.innerHTML = errorMessages[name];
                    errBlock.classList.add('text-danger', 'error-validation');
                    wrapper.append(errBlock)
                    formValidated = false;
                }
                return acc;
            }, {})

            if (!formValidated) return null

            contactService.addContact(data);
            const savedContact = contactService.getContacts().at(-1)
            listHandler.addElement(savedContact)

            addContactModal.hide();
            toastAdded.show()
            evt.target.reset();
            document.querySelectorAll('.error-validation').forEach(item => item.remove())
        })

    document.querySelector('[data-contacts-list]').addEventListener('click', e => {
        const btn = e.target.closest('.btn-close');
        if (!btn) return;

        contactIdToDelete = btn.dataset.id;

        const contact = contactService.getContacts().find(c => c.id === contactIdToDelete);
        deleteModalTitle.textContent = `Delete ${contact.fullName}?`;

        deleteContactModal.show();
    });
    
    confirmDeleteBtn.addEventListener('click', () => {
        contactService.removeContact(contactIdToDelete);
        listHandler.removeElement(contactIdToDelete);

        contactIdToDelete = null;
        deleteContactModal.hide();
        toastDeleted.show();
    });

    cancelDeleteBtn.addEventListener('click', () => {
        contactIdToDelete = null;
    });

})();
// Global Scope