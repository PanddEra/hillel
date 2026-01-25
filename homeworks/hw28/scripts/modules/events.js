'use strict';

import {validationRegExps, errorMessages} from "./contactValidationConfig.js";

export default function initEvents({
                                       contactService,
                                       listHandler,
                                       addContactModal,
                                       deleteContactModal,
                                       toastAdded,
                                       toastDeleted,
                                       validateForm
                                   }) {
    let contactIdToDelete = null;


    const addContactModalTrigger = document.querySelector('[data-add-contact-modal-btn]');
    const addContactModalForm = document.querySelector('#add-contact-form');

    const confirmDeleteBtn = document.querySelector('#confirmDeleteModalContactBtn');
    const cancelDeleteBtn = document.querySelector('#cancelDeleteModalContactBtn');


    addContactModalTrigger.addEventListener('click', () => {
        addContactModal.show();
    })

    addContactModalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = e.target.querySelectorAll('input, textarea');
        const validationResult = validateForm(inputs, validationRegExps, errorMessages);
        if (!validationResult) return null
        
        contactService.addContact(validationResult);
        const savedContact = contactService.getContacts().at(-1)
        listHandler.addElement(savedContact)

        addContactModal.hide();
        toastAdded.show()
        e.target.reset();
        document.querySelectorAll('.error-validation').forEach(item => item.remove())
    })


    document.querySelector('[data-contacts-list]').addEventListener('click', e => {
        const btn = e.target.closest('.btn-close');
        if (!btn) return;
        contactIdToDelete = btn.dataset.id;
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
}
