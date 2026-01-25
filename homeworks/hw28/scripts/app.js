'use strict';

import contactService from './modules/contactService.js';
import listHandler from './modules/uiRenderer.js';
import initEvents from './modules/events.js';
import validateForm from './modules/formValidation.js';
import createModal from "./modules/modalGenerator.js";
import createToast from "./modules/toastGenerator.js";

const addContactModal = createModal({ title: 'Add Contact', id: 'addContactModal', cssClass: '' },
    `<form id="add-contact-form">
        <div class="mb-3">
            <label for="fn" class="form-label">Full name</label>
            <input name="fullName" type="text" class="form-control" id="fn">
        </div>
        <div class="mb-3">
            <label for="pn" class="form-label">Phone number</label>
            <input name="phone" type="tel" class="form-control" id="pn">
        </div>
        <div class="mb-3">
            <label for="ad" class="form-label">Address</label>
            <textarea name="address" class="form-control" id="ad" cols="20"></textarea>
        </div>
    </form>`,
    `<div class="modal-footer d-flex justify-content-between">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            <button form="add-contact-form" type="submit" class="btn btn-success">Save</button>
        </div>`
);

const deleteContactModal = createModal({ title: 'Delete Contact', id: 'deleteContactModal', cssClass: '' },
    '<p>Are you sure you want to delete this contact?</p>',
    '<button type="button" class="btn btn-danger" id="confirmDeleteModalContactBtn">Delete</button><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cancelDeleteModalContactBtn">Cancel</button>'
);

const toastAdded = createToast({
    title: 'Success',
    body: 'Contact added!',
    bgClass: 'text-bg-success'
});

const toastDeleted = createToast({
    title: 'Deleted',
    body: 'Contact removed!',
    bgClass: 'text-bg-danger'
});

initEvents({
    contactService,
    listHandler,
    addContactModal,
    deleteContactModal,
    toastAdded,
    toastDeleted,
    validateForm
});