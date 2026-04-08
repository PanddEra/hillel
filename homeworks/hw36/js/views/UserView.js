import {modalGenerator} from "./generator/ModalGenerator.js";

class UserView{
    usersTable = null;
    createUserTrigger = null;
    createUserForm = null;
    editUserForm = null;
    confirmDeleteUserTrigger = null;
    modal = null;

    constructor() {
        this.createUserTrigger = document.querySelector('[data-create-user-trigger]');
    }

    renderTable(users) {
        if (this.modal) {
            this.modal.hide();
            document.querySelector('.modal-wrapper').remove();
            this.modal = null;
        }
        
        const tableHtml = `<table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            ${users.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="btn btn-sm btn-warning" data-edit-user='${user.id}'>Edit</button>
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
        const modal = modalGenerator(
            'Create User',
            `<form data-form-create-user>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input name="name" type="text" class="form-control" id="inputName" required>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input name="email" type="email" class="form-control" id="inputEmail" required>
                </div>
                <div class="mb-3">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input name="phone" type="tel" class="form-control" id="inputPhone">
                </div>
                <div class="mb-3">
                    <label for="inputCompany" class="form-label">Company</label>
                    <input name="company" type="text" class="form-control" id="inputCompany">
                </div>
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>`,
            `<button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>`);
        modal.show();
        this.modal = modal;
        this.createUserForm = document.querySelector('[data-form-create-user]');
    }

    openEditModal(user) {
        const modal = modalGenerator(
            `Edit User: ${user.name}`,
            `<form data-form-edit-user>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input name="name" type="text" class="form-control" id="inputName" value=${user.name} required>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input name="email" type="email" class="form-control" id="inputEmail" value=${user.email} required>
                </div>
                <div class="mb-3">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input name="phone" type="tel" class="form-control" id="inputPhone" value=${user.phone}> 
                </div>
                <div class="mb-3">
                    <label for="inputCompany" class="form-label">Company</label>
                    <input name="company" type="text" class="form-control" id="inputCompany" value=${user.company.name}>
                </div>
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>`,
            `<button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>`);
        modal.show();
        this.modal = modal;
        this.editUserForm = document.querySelector('[data-form-edit-user]');
    }

    openDeleteModal(user) {
        const modal = modalGenerator(
            `Delete User ${user.name}?`,
            null,
            `<button type="button" data-confirm-delete-user-trigger class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`);
        modal.show();
        this.modal = modal;
        this.confirmDeleteUserTrigger = document.querySelector('[data-confirm-delete-user-trigger]');
    }

    setLoading(isLoading) {
        if (isLoading) {
             const spinner = `<div data-spinner class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>`
            document.body.insertAdjacentHTML('beforeend', spinner);
        } else {
            document.querySelector('[data-spinner]').remove();
        }
    }

    showError(message) {
        const error = `<div class="toast align-items-center text-bg-danger border-0" role="alert">
            <div class="d-flex">
                <div class="toast-body">
                    Error: ${message}
                </div>
                <button type="button" class="btn-close btn-close-black me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>`
        document.body.insertAdjacentHTML('beforeend', error);
    }
}
export default UserView;