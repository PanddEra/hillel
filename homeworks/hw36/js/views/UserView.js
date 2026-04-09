import {modalGenerator} from "./generator/ModalGenerator.js";
import {toastGenerator} from "./generator/ToastGenerator.js";


class UserView {
    usersTable = null;
    createUserTrigger = null;
    createUserForm = null;
    editUserForm = null;
    confirmDeleteUserTrigger = null;
    modal = null;
    modalWrapper = null;


    constructor() {
        this.createUserTrigger = document.querySelector('[data-create-user-trigger]');
    }

    renderTable(users) {
        if (this.modal) {
            this.modal.hide();
            this.modal = null;
            this.modalWrapper = null;
        }

        const tableHtml = `<table class="table table-striped border text-center">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            ${users.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="btn btn-sm btn-warning " data-edit-user='${user.id}'>Edit</button>
                        <button class="btn btn-sm btn-danger" data-delete-user='${user.id}'>Delete</button>
                    </td>
                </tr>`).join('')}
            </tbody>
        </table>`;

        const container = document.querySelector('[data-users-table-container]');
        container.innerHTML = '';
        container.insertAdjacentHTML('beforeend', tableHtml);
        this.usersTable = document.querySelector('[data-users-table]');
    }

    openCreateModal() {
        const {modal, wrapper} = modalGenerator(
            'Create User',
            this.#createUserForm(null, 'create'),
            `<button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>`);
        modal.show();
        this.modal = modal;
        this.modalWrapper = wrapper;
        this.createUserForm = document.querySelector('[data-form-create-user]');
    }

    openEditModal(user) {
        const {modal, wrapper} = modalGenerator(
            `Edit User: ${user.name}`,
            this.#createUserForm(user, 'edit'),
            `<button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>`);
        modal.show();
        this.modal = modal;
        this.modalWrapper = wrapper;
        this.editUserForm = document.querySelector('[data-form-edit-user]');
    }

    openDeleteModal(user) {
        const {modal, wrapper} = modalGenerator(
            `Delete User ${user.name}?`,
            null,
            `<button type="button" data-confirm-delete-user-trigger class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`);
        modal.show();
        this.modal = modal;
        this.modalWrapper = wrapper;
        this.confirmDeleteUserTrigger = document.querySelector('[data-confirm-delete-user-trigger]');
    }

    setLoading(isLoading) {
        if (isLoading) {
            if (document.querySelector('[data-spinner]')) return;
            const spinner = `
        <div data-spinner
             class="position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
             style="z-index: 1000;">
             
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            
        </div>`;

            document.body.insertAdjacentHTML('beforeend', spinner);

        } else {
            const el = document.querySelector('[data-spinner]');
            if (el) el.remove();
        }
    }

    showToast(message, type = 'primary') {
        const toast = toastGenerator(message, type);
        toast.show();
    }

    #createUserForm(user, dataAttributeAction) {
        return `
        <form data-form-${dataAttributeAction}-user>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input name="name" type="text" class="form-control" id="inputName" value="${user?.name || ''}" required>
                    <span class="text-danger" data-name-error></span>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input name="email" type="email" class="form-control" id="inputEmail" value="${user?.email || ''}" required>
                    <span class="text-danger" data-email-error></span>
                </div>
                <div class="mb-3">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input name="phone" type="tel" class="form-control" id="inputPhone" value=${user?.phone || ''}> 
                    <span class="text-danger" data-phone-error></span>
                </div>
                <div class="mb-3">
                    <label for="inputCompany" class="form-label">Company</label>
                    <input name="company" type="text" class="form-control" id="inputCompany" value=${user?.company?.name || ''}>
                    <span class="text-danger" data-company-error></span>
                </div>
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
        `
    }

    showFormErrors(form, errors) {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.remove('is-invalid');
        });

        const nameErrorEl = form.querySelector('[data-name-error]');
        const emailErrorEl = form.querySelector('[data-email-error]');
        if (nameErrorEl) nameErrorEl.innerText = '';
        if (emailErrorEl) emailErrorEl.innerText = '';

        errors.forEach(error => {
            if (error.includes('name')) {
                const input = form.querySelector('input[name="name"]');
                input.classList.add('is-invalid');
                if (nameErrorEl) nameErrorEl.innerText = error;
            }
            if (error.includes('email')) {
                const input = form.querySelector('input[name="email"]');
                input.classList.add('is-invalid');
                if (emailErrorEl) emailErrorEl.innerText = error;
            }
        });
    }
}

export default UserView;