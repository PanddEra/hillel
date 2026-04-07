import {modalGenerator} from "./generator/ModalGenerator";

class UserView{
    usersTable = document.querySelector('[data-users-table]');
    createUserForm = document.querySelector('[data-form-create-user]');
    editUserForm = document.querySelector('[data-form-edit-user]');
    renderTable(users) {
        return <table data-users-table className="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Company</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => {
                return  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.company.name}</td>
                    <td>{user.address.city}, {user.address.street}, {user.address.suite}</td>
                    <td>
                        <button id='editUserBtn'>Edit</button>
                        <button id='deleteUserBtn'>Delete</button>
                    </td>
                </tr>
            })}

            </tbody>
        </table>
    }

    openCreateModal() {
        return modalGenerator(
            'Create User',
            `<form data-form-create-user>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName" required>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" required>
                </div>
                <div class="mb-3">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input type="tel" class="form-control" id="inputPhone">
                </div>
                <div class="mb-3 form-check">
                    <label for="inputCompany" class="form-label">Company</label>
                    <input type="tel" class="form-control" id="inputCompany">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>`,
            `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`);
    }

    openEditModal(user) {
        return modalGenerator(
            `Edit User: ${user.name}`,
            `<form data-form-edit-user>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName" value=${user.name} required>
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" value=${user.email} required>
                </div>
                <div class="mb-3">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input type="tel" class="form-control" id="inputPhone" value=${user.phone}> 
                </div>
                <div class="mb-3 form-check">
                    <label for="inputCompany" class="form-label">Company</label>
                    <input type="tel" class="form-control" id="inputCompany" value=${user.company.name}>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>`,
            `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`);
    }

    openDeleteModal(user) {
        return modalGenerator(
            `Delete User ${user.name}?`,
            null,
            `<button type="button" id="confirmDeleteUserBtn" class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`);
    }

    setLoading(isLoading) {
        if (isLoading) {
            return <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        } else {
            return null;
        }
    }

    showError(message) {
        return <div className="toast align-items-center text-bg-danger border-0" role="alert">
            <div className="d-flex">
                <div className="toast-body">
                    Error: {message}
                </div>
                <button type="button" className="btn-close btn-close-black me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    }
}